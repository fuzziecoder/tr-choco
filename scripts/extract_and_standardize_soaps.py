import os
import fitz
from PIL import Image, ImageFilter
import io

pdf_path = r"C:\Users\Tharun\.gemini\antigravity-ide\brain\76dcc263-7cf9-408d-8651-63556e03e0a2\.user_uploaded\media_1792292630465.pdf"
output_dir = r"E:\tr_cocc\public\images\products"
TARGET_SIZE = (1200, 1200)

os.makedirs(output_dir, exist_ok=True)

soap_mapping = {
    1: ["sandal-soap.webp"],
    2: ["charcoal-soap.webp"],
    3: ["neem-tulsi-soap.webp"],
    4: ["avocado-soap.webp"],
    5: ["multani-mitti-soap.webp"],
    6: ["shea-butter-soap.webp"],
    7: ["orange-soap.webp"],
}

doc = fitz.open(pdf_path)
print(f"Loaded soap PDF with {len(doc)} pages.")

for page_idx, page in enumerate(doc):
    page_num = page_idx + 1
    target_files = soap_mapping.get(page_num, [])
    if not target_files:
        continue

    images = page.get_images()
    if not images:
        continue

    xref = images[0][0]
    base_img = doc.extract_image(xref)
    img_bytes = base_img["image"]

    im = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    w, h = im.size
    print(f"Page {page_num}: Raw extracted size {w}x{h}")

    # Standardize to 1:1 canvas (1200x1200)
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

    for filename in target_files:
        out_path = os.path.join(output_dir, filename)
        bg.save(out_path, "WEBP", quality=92, method=6)
        print(f"  -> Saved {out_path} ({os.path.getsize(out_path):,} bytes, 1:1 ratio)")

print("\nSuccessfully extracted and standardized all 7 handmade soaps!")
