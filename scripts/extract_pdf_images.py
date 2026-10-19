import os
import fitz  # PyMuPDF
from PIL import Image
import io

pdf_path = r"C:\Users\Tharun\.gemini\antigravity-ide\brain\76dcc263-7cf9-408d-8651-63556e03e0a2\.user_uploaded\media_1792244640133.pdf"
output_dir = r"E:\tr_cocc\public\images\products"

os.makedirs(output_dir, exist_ok=True)

# Mapping of page number (1-indexed) to list of target filenames
mapping = {
    1: ["nice-pista.webp", "white-crunchy.webp"],
    2: ["white-almond.webp"],
    3: ["dark-almond.webp"],
    4: ["mango-flavour.webp", "milk-mango.webp"],
    5: ["milk-almond.webp", "roasted-almond.webp"],
    6: ["chocolate-bar.webp"],
    7: ["roasted-cashew-dark.webp"],
    8: ["coconut-truffle.webp"],
    9: ["day-night-basic.webp", "day-night-filling.webp"],
    10: ["dark-honey.webp", "hazelnut.webp"],
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
        print(f"No image on page {page_num}")
        continue

    # Extract the first image on the page
    xref = images[0][0]
    base_img = doc.extract_image(xref)
    img_bytes = base_img["image"]
    img_ext = base_img["ext"]
    
    pil_img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    print(f"Extracted page {page_num}: {pil_img.size} ({img_ext})")

    for filename in target_files:
        out_path = os.path.join(output_dir, filename)
        pil_img.save(out_path, "WEBP", quality=92, method=6)
        print(f"  -> Saved {out_path} ({os.path.getsize(out_path):,} bytes)")

print("\nDone extracting all images!")
