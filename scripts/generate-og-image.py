import os
from PIL import Image, ImageDraw, ImageFont

output_path = r"C:\Users\Acer\OneDrive\Desktop\portfolio\public\og-image.png"

# Standard OpenGraph Dimensions: 1200 x 630
img = Image.new("RGB", (1200, 630), (15, 23, 42))
draw = ImageDraw.Draw(img)

# Background tech grid
grid_color = (30, 41, 59)
for x in range(0, 1200, 40):
    draw.line([(x, 0), (x, 630)], fill=grid_color, width=1)
for y in range(0, 630, 40):
    draw.line([(0, y), (1200, y)], fill=grid_color, width=1)

# Outer glow/border card
draw.rounded_rectangle([60, 60, 1140, 570], radius=24, fill=(24, 24, 27), outline=(63, 63, 70), width=2)

# Logo Box "FE"
draw.rounded_rectangle([100, 100, 170, 170], radius=16, fill=(244, 244, 245))
# Brand typography
draw.rectangle([190, 115, 380, 135], fill=(244, 244, 245))
draw.rectangle([190, 145, 460, 160], fill=(161, 161, 170))

# Status Pill: Available for Roles
draw.rounded_rectangle([820, 110, 1100, 160], radius=25, fill=(6, 78, 59), outline=(16, 185, 129), width=1)
draw.ellipse([845, 130, 855, 140], fill=(52, 211, 153))

# Big headline bars
draw.rectangle([100, 230, 1020, 275], fill=(244, 244, 245))
draw.rectangle([100, 290, 840, 335], fill=(161, 161, 170))
draw.rectangle([100, 360, 720, 385], fill=(113, 113, 122))

# Bottom Cards - Case Studies Teaser
draw.rounded_rectangle([100, 430, 590, 530], radius=14, fill=(39, 39, 42), outline=(63, 63, 70))
draw.rounded_rectangle([620, 430, 1100, 530], radius=14, fill=(39, 39, 42), outline=(63, 63, 70))

# Card 1 content
draw.rounded_rectangle([120, 450, 150, 480], radius=6, fill=(59, 130, 246))
draw.rectangle([165, 455, 420, 470], fill=(244, 244, 245))
draw.rectangle([165, 485, 360, 498], fill=(161, 161, 170))

# Card 2 content
draw.rounded_rectangle([640, 450, 670, 480], radius=6, fill=(16, 185, 129))
draw.rectangle([685, 455, 940, 470], fill=(244, 244, 245))
draw.rectangle([685, 485, 880, 498], fill=(161, 161, 170))

img.save(output_path, "PNG", optimize=True)
print(f"OpenGraph card generated at {output_path} ({os.path.getsize(output_path)} bytes)")
