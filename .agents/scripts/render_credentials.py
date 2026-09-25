from pathlib import Path
import fitz

source_dir = Path("attached_assets")
output_dir = Path(".agents/outputs/credentials")
output_dir.mkdir(parents=True, exist_ok=True)

for pdf_path in sorted(source_dir.glob("*.pdf")):
    if "resume" in pdf_path.name.lower():
        continue
    document = fitz.open(pdf_path)
    page = document.load_page(0)
    pixmap = page.get_pixmap(matrix=fitz.Matrix(1.25, 1.25), alpha=False)
    output_path = output_dir / f"{pdf_path.stem}.png"
    pixmap.save(output_path)
    print(f"{pdf_path.name} -> {output_path} ({document.page_count} page)")