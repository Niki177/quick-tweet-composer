# Quick Tweet Composer

A React + Vite + TypeScript app that lets you compose and post tweets (or simulate posting) with a beautiful UI inspired by the Figma design.

## Features
- 🔐 **Twitter OAuth 2.0 Authentication** *(integration point — requires backend)*
- ✍️ **Tweet Composition** with real-time character counting
- 🚀 **Direct Posting** *(currently simulated; replace with backend call)*
- 🌙 **Dark Mode Support** (toggle)
- 📱 **Responsive Design** — works on desktop & mobile
- ⌨ **Keyboard Shortcut** — Ctrl/Cmd + Enter to post

## Prerequisites
- Node.js v16 or higher
- npm (comes with Node.js)

## Getting Started (Localhost)

1. **Clone this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/quick-tweet-composer.git
   cd quick-tweet-composer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```
   - App will be available at [http://localhost:5173](http://localhost:5173)

4. **Stop the server**
   - In the terminal, press `CTRL + C`

## Notes on Twitter OAuth
- This repo only simulates tweet posting for security.
- For real posting:
  - You need a **Twitter Developer Account**
  - You must build a **backend server** to handle OAuth 2.0
  - Twitter API requires a valid redirect URL — `localhost` works for dev, but production needs HTTPS

## Development Scripts
- `npm run dev` — start dev server (localhost)
- `npm run build` — build for production (outputs to `dist/`)
- `npm run preview` — preview production build locally

## License
MIT
