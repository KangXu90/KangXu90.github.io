# Kang Xu - personal website

This is a lightweight static personal website for Kang Xu, Ph.D.

## Site Structure

- `index.html`: main research profile and homepage
- `cv.html`: web version of the CV
- `blog.html`: blog index and writing roadmap
- `styles.css`: shared visual styles
- `script.js`: theme toggle and footer year
- `assets/`: static files such as PDFs, figures, and diagrams

## Recommended Workflow

Use Overleaf as the source of truth for the formal resume/CV PDF. Use this website as the public-facing, skim-friendly version.

When the resume changes:

1. Update the LaTeX source in Overleaf.
2. Export the latest PDF.
3. Put the exported PDF in `assets/Kang-Xu-Resume.pdf`.
4. Keep `cv.html` as a shorter web CV for readers who do not want to open a PDF.

For blog posts, start simple:

1. Draft the idea in a plain text or Markdown note.
2. Turn polished posts into individual HTML pages later, such as `posts/odmr-snr.html`.
3. Add each post link to `blog.html`.

Good first post categories:

- Quantum sensing methods: ODMR, Rabi/Ramsey, XY8/CPMG, nanoscale NMR
- Instrumentation: AWG, PulseBlaster, digitizers, VISA/SCPI, LabVIEW/Python control
- Lab practice: drift tracking, SNR optimization, debugging measurement systems
- Career/research story: from 2D materials to quantum sensing instrumentation
