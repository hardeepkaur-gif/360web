"""Remove outer background from wordpress-hero.png via edge flood-fill (Pillow)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "assets" / "images" / "wordpress-hero.png"
OUT = SRC  # overwrite in place
MARK = (7, 9, 11)  # unlikely inside subject/UI
THRESH = 38


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    w, h = im.size
    rgb = Image.new("RGB", (w, h))
    rgb.paste(im, mask=im.split()[3])

    work = rgb.copy()
    corners = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
    for xy in corners:
        try:
            ImageDraw.floodfill(work, xy, value=MARK, thresh=THRESH)
        except ValueError:
            pass

    # Second pass: edge pixels still not marked (disconnected islands / holes)
    px = work.load()
    for x in range(w):
        for y in (0, h - 1):
            if px[x, y] != MARK:
                try:
                    ImageDraw.floodfill(work, (x, y), value=MARK, thresh=THRESH)
                except ValueError:
                    pass
    for y in range(h):
        for x in (0, w - 1):
            if px[x, y] != MARK:
                try:
                    ImageDraw.floodfill(work, (x, y), value=MARK, thresh=THRESH)
                except ValueError:
                    pass

    wpx = work.load()
    out_px = im.load()
    for y in range(h):
        for x in range(w):
            if wpx[x, y] == MARK:
                out_px[x, y] = (0, 0, 0, 0)

    im.save(OUT, format="PNG", optimize=True)
    print(f"Wrote {OUT} ({w}x{h})")


if __name__ == "__main__":
    main()
