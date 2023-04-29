![showcase]("/showcase.png")

**[Preview Project]("https://livelink")**

# **🌶️ Down Town Food Restaurant**

Multi-page website bundled with `vite`. 🤦 I almost forgot what it was like before UI frameworks like `Reactjs` and `the other one`.

## **🏗️ Tech Stack 🥣**

- Vanilla HTML + JavaScript 🍨
- Tailwindcss 🖌️
- Vite : bundling
- SwiperJs : for swiping? I guess 🤔
- GSAP : animation library

## **🤔 Challenges & Observations**

- **👹 My silly mistake** : All pages aside the `index.html` seems broken and would't response to all javascript related events on the page. At first I thought it was the the folder structure and how `vite` builds the final product.

  - This bug was as a result of a reference to a DOM element only available in `index.html` and breaks other pages when it loads the same `main.js` (which included `animation.js`) in these pages.

  - First solution was to fix all routing issues (🙄 vite never built other pages unless specified in `vite.config.js`)

  - And 🥁....... ✨ separated animation function into `animateAbout.js` and added it to `index.html` page.

- **🤔 Vite adds `script` in htm `head`** : This could be because I loaded the styles from `main.js` instead of adding it manually to every page.

  - But either way, I noticed there was alway a delay before the styles were applied to the pages, irrespective of how I referenced the `styles.css` in each page
