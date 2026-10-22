import os
from PIL import Image, ImageDraw, ImageFont

output_dir = r"C:\Users\Acer\OneDrive\Desktop\portfolio\public\images\projects"
os.makedirs(output_dir, exist_ok=True)

def create_base_canvas(width=1200, height=675, bg_color=(15, 23, 42)):
    img = Image.new("RGB", (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw subtle background grid
    grid_color = (30, 41, 59)
    for x in range(0, width, 40):
        draw.line([(x, 0), (x, height)], fill=grid_color, width=1)
    for y in range(0, height, 40):
        draw.line([(0, y), (width, y)], fill=grid_color, width=1)
        
    return img, draw

# 1. Kadence Hero
img, draw = create_base_canvas()
# Card surface
draw.rounded_rectangle([80, 70, 1120, 605], radius=16, fill=(24, 24, 27), outline=(63, 63, 70), width=2)
# Window header
draw.rounded_rectangle([80, 70, 1120, 120], radius=16, fill=(39, 39, 42))
draw.rectangle([80, 100, 1120, 120], fill=(39, 39, 42))
draw.ellipse([105, 90, 117, 102], fill=(239, 68, 68))
draw.ellipse([125, 90, 137, 102], fill=(234, 179, 8))
draw.ellipse([145, 90, 157, 102], fill=(34, 197, 94))
draw.rectangle([200, 88, 480, 104], fill=(63, 63, 70))
# Sidebar
draw.rectangle([80, 120, 280, 605], fill=(24, 24, 27))
draw.line([(280, 120), (280, 605)], fill=(63, 63, 70), width=1)
for i in range(5):
    draw.rounded_rectangle([100, 150 + i * 45, 260, 180 + i * 45], radius=6, fill=(39, 39, 42) if i == 1 else (24, 24, 27))
# Main Content Area - Kadence Portal Analytics & Table
draw.rounded_rectangle([310, 150, 680, 310], radius=10, fill=(39, 39, 42), outline=(63, 63, 70))
draw.rounded_rectangle([710, 150, 1090, 310], radius=10, fill=(39, 39, 42), outline=(63, 63, 70))
# Analytics bars
bars = [120, 180, 140, 210, 190, 250, 220, 280]
for idx, h in enumerate(bars):
    draw.rectangle([740 + idx * 42, 290 - int(h * 0.4), 770 + idx * 42, 290], fill=(59, 130, 246) if idx >= 5 else (100, 116, 139))
# Data Table preview
draw.rounded_rectangle([310, 335, 1090, 580], radius=10, fill=(39, 39, 42), outline=(63, 63, 70))
for r in range(5):
    draw.line([(310, 380 + r * 40), (1090, 380 + r * 40)], fill=(63, 63, 70), width=1)
img.save(os.path.join(output_dir, "kadence-hero.webp"), "WEBP", quality=85)

# 2. Kadence IA
img, draw = create_base_canvas()
# Tree node diagram
draw.rounded_rectangle([450, 60, 750, 130], radius=12, fill=(30, 58, 138), outline=(96, 165, 250), width=2)
# Level 2 nodes
nodes = [160, 480, 800]
for n_x in nodes:
    draw.line([(600, 130), (n_x + 120, 230)], fill=(148, 163, 184), width=2)
    draw.rounded_rectangle([n_x, 230, n_x + 240, 300], radius=10, fill=(30, 41, 59), outline=(100, 116, 139), width=2)
# Level 3 sub-nodes
subnodes = [(120, 400), (280, 400), (440, 400), (600, 400), (760, 400), (920, 400)]
for idx, (s_x, s_y) in enumerate(subnodes):
    parent_x = nodes[idx // 2] + 120
    draw.line([(parent_x, 300), (s_x + 70, s_y)], fill=(71, 85, 105), width=2)
    draw.rounded_rectangle([s_x, s_y, s_x + 140, s_y + 180], radius=8, fill=(15, 23, 42), outline=(51, 65, 85), width=1)
img.save(os.path.join(output_dir, "kadence-ia.webp"), "WEBP", quality=85)

# 3. Kadence Table Redesign
img, draw = create_base_canvas()
draw.rounded_rectangle([100, 80, 1100, 595], radius=14, fill=(24, 24, 27), outline=(63, 63, 70), width=2)
# Search & Filters row
draw.rounded_rectangle([130, 110, 450, 150], radius=8, fill=(39, 39, 42))
draw.rounded_rectangle([470, 110, 580, 150], radius=8, fill=(59, 130, 246))
draw.rounded_rectangle([600, 110, 710, 150], radius=8, fill=(39, 39, 42))
draw.rounded_rectangle([950, 110, 1070, 150], radius=8, fill=(16, 185, 129))
# Table rows
for row_i in range(8):
    y_pos = 180 + row_i * 48
    draw.line([(100, y_pos), (1100, y_pos)], fill=(63, 63, 70), width=1)
    # Checkbox
    draw.rounded_rectangle([130, y_pos + 14, 150, y_pos + 34], radius=4, fill=(59, 130, 246) if row_i % 2 == 1 else (39, 39, 42))
    # Cells
    draw.rectangle([180, y_pos + 18, 380, y_pos + 30], fill=(228, 228, 231) if row_i == 0 else (161, 161, 170))
    draw.rectangle([420, y_pos + 18, 560, y_pos + 30], fill=(228, 228, 231) if row_i == 0 else (113, 113, 122))
    draw.rounded_rectangle([600, y_pos + 12, 690, y_pos + 36], radius=12, fill=(16, 185, 129, 40) if row_i % 2 == 0 else (234, 179, 8, 40))
    draw.rectangle([730, y_pos + 18, 880, y_pos + 30], fill=(113, 113, 122))
    draw.rectangle([920, y_pos + 18, 1060, y_pos + 30], fill=(59, 130, 246))
img.save(os.path.join(output_dir, "kadence-table.webp"), "WEBP", quality=85)

# 4. Kadence Analytics
img, draw = create_base_canvas()
draw.rounded_rectangle([100, 80, 580, 595], radius=14, fill=(24, 24, 27), outline=(63, 63, 70), width=2)
draw.rounded_rectangle([620, 80, 1100, 320], radius=14, fill=(24, 24, 27), outline=(63, 63, 70), width=2)
draw.rounded_rectangle([620, 355, 1100, 595], radius=14, fill=(24, 24, 27), outline=(63, 63, 70), width=2)
# Circular progress / Donut chart
draw.arc([220, 180, 460, 420], start=0, end=270, fill=(59, 130, 246), width=32)
draw.arc([220, 180, 460, 420], start=270, end=360, fill=(16, 185, 129), width=32)
# Bar chart in top right card
for i in range(10):
    val = [40, 65, 80, 55, 90, 75, 110, 95, 125, 140][i]
    draw.rectangle([660 + i * 40, 280 - val, 688 + i * 40, 280], fill=(99, 102, 241))
# Area wave in bottom right card
points = [(660, 530), (710, 490), (760, 510), (810, 440), (860, 470), (910, 420), (960, 450), (1010, 390), (1060, 410)]
draw.line(points, fill=(16, 185, 129), width=3)
img.save(os.path.join(output_dir, "kadence-analytics.webp"), "WEBP", quality=85)

# 5. SAMPERIN Hero (Mobile Mockup Presentation)
img, draw = create_base_canvas(bg_color=(24, 24, 27))
# 3 Phone Frames
phones_x = [230, 470, 710]
for idx, px in enumerate(phones_x):
    elev = -20 if idx == 1 else 10
    # Shadow
    draw.rounded_rectangle([px + 8, 70 + elev + 8, px + 268, 590 + elev + 8], radius=36, fill=(9, 9, 11))
    # Phone Body
    draw.rounded_rectangle([px, 70 + elev, px + 260, 590 + elev], radius=36, fill=(18, 18, 20), outline=(63, 63, 70), width=3)
    # Screen
    draw.rounded_rectangle([px + 10, 80 + elev, px + 250, 580 + elev], radius=28, fill=(9, 9, 11))
    # Dynamic Island / Notch
    draw.rounded_rectangle([px + 90, 92 + elev, px + 170, 112 + elev], radius=10, fill=(0, 0, 0))
    # Screen UI
    if idx == 0:
        # Map Screen
        draw.rectangle([px + 10, 130 + elev, px + 250, 440 + elev], fill=(30, 41, 59))
        draw.ellipse([px + 120, 260 + elev, px + 140, 280 + elev], fill=(239, 68, 68))
        draw.rounded_rectangle([px + 24, 460 + elev, px + 236, 560 + elev], radius=12, fill=(39, 39, 42))
    elif idx == 1:
        # Active Order Screen (Primary)
        draw.rounded_rectangle([px + 24, 150 + elev, px + 236, 320 + elev], radius=14, fill=(39, 39, 42), outline=(16, 185, 129), width=2)
        draw.rounded_rectangle([px + 40, 350 + elev, px + 220, 420 + elev], radius=10, fill=(24, 24, 27))
        draw.rounded_rectangle([px + 24, 480 + elev, px + 236, 540 + elev], radius=24, fill=(16, 185, 129))
    else:
        # Courier Radar Screen
        draw.rounded_rectangle([px + 24, 150 + elev, px + 236, 260 + elev], radius=12, fill=(39, 39, 42))
        draw.rounded_rectangle([px + 24, 280 + elev, px + 236, 390 + elev], radius=12, fill=(39, 39, 42))
        draw.rounded_rectangle([px + 24, 410 + elev, px + 236, 520 + elev], radius=12, fill=(39, 39, 42))
img.save(os.path.join(output_dir, "samperin-hero.webp"), "WEBP", quality=85)

# 6. SAMPERIN Maps
img, draw = create_base_canvas(bg_color=(24, 24, 27))
# Map background with grid and campus paths
draw.rounded_rectangle([150, 60, 1050, 615], radius=20, fill=(30, 41, 59), outline=(71, 85, 105), width=2)
# Campus building blocks
buildings = [
    (240, 120, 440, 280, "Fakultas TI"),
    (520, 120, 760, 240, "Auditorium"),
    (820, 120, 980, 340, "Perpustakaan"),
    (240, 360, 500, 520, "Kantin Bawah"),
    (580, 320, 780, 520, "Lab Komputer"),
]
for (bx1, by1, bx2, by2, label) in buildings:
    draw.rounded_rectangle([bx1, by1, bx2, by2], radius=10, fill=(51, 65, 85), outline=(100, 116, 139), width=2)
# Selected landmark marker
draw.line([(380, 220), (680, 420)], fill=(16, 185, 129), width=4)
draw.ellipse([670, 410, 690, 430], fill=(239, 68, 68))
# Floating location sheet card
draw.rounded_rectangle([680, 450, 1010, 590], radius=16, fill=(15, 23, 42), outline=(16, 185, 129), width=2)
draw.rectangle([710, 475, 960, 490], fill=(241, 245, 249))
draw.rectangle([710, 505, 880, 518], fill=(148, 163, 184))
draw.rounded_rectangle([710, 535, 980, 575], radius=8, fill=(16, 185, 129))
img.save(os.path.join(output_dir, "samperin-maps.webp"), "WEBP", quality=85)

# 7. SAMPERIN Order 3-Step Flow
img, draw = create_base_canvas(bg_color=(24, 24, 27))
steps = [
    ("1. Task Details", 140),
    ("2. Destination", 480),
    ("3. Tip & Confirm", 820),
]
for title, s_x in steps:
    draw.rounded_rectangle([s_x, 90, s_x + 240, 585], radius=18, fill=(39, 39, 42), outline=(63, 63, 70), width=2)
    draw.rounded_rectangle([s_x + 20, 120, s_x + 220, 160], radius=8, fill=(59, 130, 246) if s_x == 140 else (63, 63, 70))
    for item in range(4):
        draw.rounded_rectangle([s_x + 20, 190 + item * 70, s_x + 220, 245 + item * 70], radius=8, fill=(24, 24, 27))
    draw.rounded_rectangle([s_x + 20, 520, s_x + 220, 565], radius=12, fill=(16, 185, 129))
img.save(os.path.join(output_dir, "samperin-order.webp"), "WEBP", quality=85)

# 8. SAMPERIN Courier View
img, draw = create_base_canvas(bg_color=(24, 24, 27))
# Radar / Order Acceptance Screen
draw.rounded_rectangle([200, 80, 1000, 595], radius=16, fill=(39, 39, 42), outline=(63, 63, 70), width=2)
draw.rounded_rectangle([240, 115, 600, 165], radius=8, fill=(16, 185, 129, 60))
draw.rounded_rectangle([640, 115, 960, 165], radius=8, fill=(24, 24, 27))
# 2 Big Courier Cards
for c_i in range(2):
    cy = 195 + c_i * 180
    draw.rounded_rectangle([240, cy, 960, cy + 155], radius=12, fill=(24, 24, 27), outline=(63, 63, 70))
    draw.ellipse([270, cy + 30, 320, cy + 80], fill=(59, 130, 246))
    draw.rectangle([340, cy + 35, 620, cy + 50], fill=(244, 244, 245))
    draw.rectangle([340, cy + 65, 520, cy + 78], fill=(161, 161, 170))
    # 4-digit PIN verification badge
    draw.rounded_rectangle([340, cy + 95, 480, cy + 130], radius=6, fill=(39, 39, 42))
    # Accept button
    draw.rounded_rectangle([780, cy + 45, 930, cy + 105], radius=10, fill=(16, 185, 129))
img.save(os.path.join(output_dir, "samperin-courier.webp"), "WEBP", quality=85)

print("All 8 WebP assets generated successfully!")
