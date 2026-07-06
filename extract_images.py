import fitz
import os

pdf_path = "public/assets/images/lookbook/hexing photoshoot.pdf"
doc = fitz.open(pdf_path)
out_dir = "public/assets/images/lookbook"

extracted_count = 0
for i in range(len(doc)):
    for img in doc.get_page_images(i):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        if pix.n - pix.alpha > 3:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        pix.save(f"{out_dir}/img_{extracted_count + 1}.png")
        pix = None
        extracted_count += 1
        if extracted_count == 6:
            break
    if extracted_count == 6:
        break
print(f"Extracted {extracted_count} images")
