This folder contains all the images used by the H&K website — real local
files, not remote URLs. The site will work fully offline and on GitHub
Pages without depending on any third-party image service.

What's inside:
- hero.jpg                     - homepage hero banner image
- logo.png                     - red/white H&K logo image (used for the
                                  social-media preview tag; the header
                                  itself still uses the CSS-drawn logo box)
- categories/<category>.jpg    - one image per shop category tile
- products/pN_1.jpg, pN_2.jpg, pN_3.jpg
                                - placeholder photos for each product
                                  (N = the product's id in script.js).
                                  pN_1.jpg doubles as that product's main
                                  card/thumbnail image; all files for a
                                  product are also used in its gallery.

These are clearly-labeled placeholder graphics (each shows the product or
category name with a small H&K tag) meant to make the site fully
functional and presentable out of the box. Replace them with real product
photography whenever you're ready:

1. Save your real photo into this folder (or a subfolder), e.g.
   images/products/p1_1.jpg - keeping the same filename is easiest since
   script.js already points to it, but you can use any name/path.
2. If you use a different filename, open script.js, find the product
   inside the "ADD / EDIT PRODUCTS HERE" section, and update its "image"
   and "gallery" fields to your new path, e.g. image: "images/my-photo.jpg"
3. For the category tiles, edit the CATEGORIES list near the top of
   script.js the same way.
4. For the hero banner, update the <img src="images/hero.jpg"> line near
   the top of index.html.
