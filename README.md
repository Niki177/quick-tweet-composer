Quick Tweet Composer
====================

This is a front-end React + Vite + TypeScript starter for the Quick Tweet Composer UI (copy-paste ready). The UI matches the Figma design and includes:

- OAuth integration points (you must supply a backend for secure OAuth token exchange)
- Ctrl/Cmd + Enter to post
- Character counter and progress bar
- Dark/light toggle
- Responsive layout

## Setup (local)
1. Install Node.js v16+
2. Extract files and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:5173

## Notes about OAuth / Posting to Twitter (X)
- For security, you must handle the OAuth 2.0 authorization flow server-side.
- This repo intentionally **does not** include secrets or server logic.
- See Twitter API docs for how to implement an OAuth backend.
- After your backend obtains an access token, you can POST from the frontend to your backend endpoint to actually publish a tweet.

## Deploying
- Use Vercel, Netlify, or similar. For Netlify, build and publish the `dist/` folder after running `npm run build`.

## Customization
- The UI code lives in `src/components/TwitterWriter.tsx`. Replace the `submit` function with a call to your secure backend.
