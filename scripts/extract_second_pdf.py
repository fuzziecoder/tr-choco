import os
import fitz
from PIL import Image
import io

pdf_path = r"C:\Users\Tharun\.gemini\antigravity-ide\brain\76dcc263-7cf9-408d-8651-63556e03e0a2\.user_uploaded\media_1792246914393.pdf"
output_dir = r"E:\tr_cocc\public\images\products"

os.makedirs(output_dir, exist_ok=True)

# Mapping of page number to output filenames
mapping = {
    1: ["orange-soap.webp", "shampoo.webp"],
    2: ["red-sandalwood-powder.webp", "sandalwood-colors.webp"],
    3: ["kasturi-manjal.webp"],
    4: ["kasturi-manjal-alt.webp"],
    5: ["sandalwood-manjal-combo.webp", "rosewater-multani-mitti-combo.webp"],
    6: ["kasturi-manjal-jar.webp"],
    7: ["tea.webp", "tea-varieties.webp"],
    8: ["ginger-tea.webp"],
    9: ["padimugam-tr.webp"],
    10: ["padimugam.webp", "herbal-tea-all-varieties.webp"],
}

doc = fitz.open(pdf_path)
print(f"Loaded PDF with {len(doc)} pages.")

for page_idx, page in enumerate(doc):
    page_num = page_idx + 1
    target_files = mapping.get(page_num, [])
    if not target_files:
        continue

    images = page.get_images()
    if not images:
        continue

    xref = images[0][0]
    base_img = doc.extract_image(xref)
    img_bytes = base_img["image"]
    
    pil_img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    print(f"Extracted page {page_num}: {pil_img.size}")

    for filename in target_files:
        out_path = os.path.join(output_dir, filename)
        pil_img.save(out_path, "WEBP", quality=92, method=6)
        print(f"  -> Saved {out_path} ({os.path.getsize(out_path):,} bytes)")

print("\nDone extracting second batch!")
