# Cornelias Warui — Personal Portfolio

A responsive five-page personal portfolio built with semantic HTML, CSS and vanilla JavaScript. It is designed for static hosting on GitHub Pages.

## Project structure

```text
personal-portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Run locally

1. Extract the ZIP file.
2. Open the folder in Visual Studio Code.
3. Use the Live Server extension, or open `index.html` in a browser.
4. Navigate through all five pages and test the mobile menu and contact form.

## Before publishing

- Replace `your.email@example.com` in `contact.html` and `js/script.js` with your real email address.
- Replace the LinkedIn link in `contact.html` with your profile URL.
- The homepage currently uses `assets/profile-placeholder.png` as a sample portrait. Replace that file with your own professional photo (keeping the same filename), or update the image path in `index.html`. The image is displayed with `object-fit: cover` so it fills the portrait frame.
- Review the skills and project descriptions to ensure they accurately reflect the work you want to present.
- Add links to live projects or repositories where you have permission to share them.

## Publish with GitHub Pages

1. Create a GitHub repository named `yourusername-portfolio` (or another suitable name).
2. Upload the contents of this folder. Keep the `css` and `js` folders in the root alongside the HTML files.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. After deployment, GitHub will provide a URL similar to `https://yourusername.github.io/yourusername-portfolio/`.

## Notes

- No framework or build step is required.
- The contact form uses `mailto:` because GitHub Pages does not provide a server-side form handler. It opens the visitor's email application; it does not send or store messages itself.
- Google Fonts are loaded from Google's font CDN. A system sans-serif fallback is included.
