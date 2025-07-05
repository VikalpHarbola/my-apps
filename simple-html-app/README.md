# ColorVision-Inspired Portfolio

A high-end, interactive, and visually dynamic portfolio website inspired by the ColorVision site on Awwwards.

## ✨ Features
- Immersive Three.js neon animated background
- Animated hero, projects, about, and contact sections (GSAP)
- Neon, interactive contact form and animated social icons
- Floating music toggle button and custom neon cursor
- Fully responsive, modern, and creative design

## 📁 Project Structure
```
simple-html-app/
│
├── index.html
│
├── css/
│   ├── styles.css         # Main site styles (neon, layout, responsive, etc.)
│   └── fonts.css          # Google Fonts imports (Space Grotesk, Montserrat)
│
├── js/
│   ├── main.js            # GSAP animations, music toggle, neon cursor, etc.
│   └── three-bg.js        # Three.js neon animated background
│
└── assets/                # (Optional) For images, icons, music, etc.
```

## 🚀 How to Deploy

### 1. Local Preview
- Open `index.html` directly in your browser (double-click or right-click → Open with browser).
- For full Three.js and module support, use a local server (see below).

### 2. Using a Local Server (Recommended)
Some browsers block ES module imports (like Three.js) when opening files directly. To avoid issues, use a local server:

#### Option A: Python (if installed)
```sh
python -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

#### Option B: Node.js (if installed)
```sh
npm install -g http-server
http-server -p 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

#### Option C: VS Code Live Server Extension
- Install the "Live Server" extension in VS Code.
- Right-click `index.html` → "Open with Live Server".

### 3. Deploy Online (Static Hosting)
You can deploy this site to any static hosting service, such as:
- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting
- Surge.sh

**Steps:**
1. Push your project folder to a GitHub repository (if using GitHub Pages).
2. Follow the host's instructions to deploy a static site (usually just drag-and-drop or connect your repo).

### 4. Deploy to GitHub Pages

You can easily deploy this site for free using GitHub Pages:

1. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new) and create a new repository (e.g., `colorvision-portfolio`).

2. **Push your project to GitHub**
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/colorvision-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** (or "Pages" in the sidebar).
   - Under "Source", select the `main` branch and `/root` (or `/docs` if you put your site in a `docs` folder).
   - Click **Save**.

4. **Access your site**
   - After a minute, your site will be live at:
     `https://your-username.github.io/colorvision-portfolio/`

**Tip:** If you use custom routing or need to support `404.html`, add that file as well.

---

## 🟢 That's it!
Your site is ready for the world!

If you want a step-by-step for a specific host, or want to add a favicon or more features, just ask!
