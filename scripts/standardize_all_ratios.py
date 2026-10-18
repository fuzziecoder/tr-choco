import os
from PIL import Image, ImageFilter

products_dir = r"E:\tr_cocc\public\images\products"
TARGET_SIZE = (1200, 1200)

files = [
    f for f in os.listdir(products_dir)
    if f.endswith((".webp", ".jpg", ".jpeg", ".png"))
    and not f.startswith("test_")
]

print(f"Standardizing {len(files)} product images to 1:1 uniform ratio...")

for filename in files:
    file_path = os.path.join(products_dir, filename)
    try:
        with Image.open(file_path) as im:
            im = im.convert("RGB")
            w, h = im.size

            if w == TARGET_SIZE[0] and h == TARGET_SIZE[1]:
                print(f"Skipping {filename} (already 1:1)")
                continue

            tw, th = TARGET_SIZE
            scale = min(tw / w, th / h)
            new_w = int(w * scale)
            new_h = int(h * scale)

            resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)

            # Ambient blurred background
            bg = im.resize((tw, th), Image.Resampling.LANCZOS)
            bg = bg.filter(ImageFilter.GaussianBlur(radius=45))
            bg = Image.blend(bg, Image.new("RGB", (tw, th), (28, 20, 16)), 0.3)

            # Center on canvas
            paste_x = (tw - new_w) // 2
            paste_y = (th - new_h) // 2
            bg.paste(resized, (paste_x, paste_y))

            bg.save(file_path, "WEBP", quality=92, method=6)
            print(f"  -> Converted {filename} from {w}x{h} to {tw}x{th}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Clean up test files if present
for test_file in ["test_uniform.webp", "test_horizontal.webp"]:
    test_path = os.path.join(products_dir, test_file)
    if os.path.exists(test_path):
        os.remove(test_path)
        print(f"Removed temporary file {test_file}")

print("\nAll product images are now standardized to uniform 1:1 ratio!")
