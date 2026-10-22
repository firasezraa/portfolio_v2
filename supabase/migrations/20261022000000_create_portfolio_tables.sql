-- ==============================================================================
-- Migration: Portfolio Tables for Firas Ezra (contact_messages & project_views)
-- ==============================================================================

-- 1. Table: contact_messages
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.contact_messages enable row level security;

-- Policy: Allow anonymous users (and recruiters) to INSERT contact messages
create policy "Allow anonymous insert to contact_messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Explicitly revoke public SELECT/UPDATE/DELETE to prevent message leakage
revoke select, update, delete on public.contact_messages from anon, authenticated;


-- 2. Table: project_views (Lightweight analytics counter)
create table if not exists public.project_views (
  id uuid primary key default gen_random_uuid(),
  project_slug text unique not null,
  view_count bigint not null default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.project_views enable row level security;

-- Policy: Allow anyone (anon) to read project view counts
create policy "Allow public read for project_views"
  on public.project_views
  for select
  to anon
  using (true);


-- 3. Atomic increment function (RPC)
create or replace function public.increment_project_view(p_slug text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_new_count bigint;
begin
  insert into public.project_views (project_slug, view_count, updated_at)
  values (p_slug, 1, timezone('utc'::text, now()))
  on conflict (project_slug)
  do update set 
    view_count = project_views.view_count + 1,
    updated_at = timezone('utc'::text, now())
  returning view_count into v_new_count;

  return v_new_count;
end;
$$;

-- Grant EXECUTE to anon so Next.js client/server can invoke RPC
grant execute on function public.increment_project_view(text) to anon, authenticated;
