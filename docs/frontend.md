# Frontend Documentation

## Project Structure (App Router)
```
frontend/app/
├─ layout.tsx            # Root layout used by all pages
├─ page.tsx              # Home page (currently empty)
├─ login/
│   └─ page.tsx          # Login page UI (simple form placeholder)
├─ components/
│   └─ Navbar.tsx        # Navigation bar with Login / Register buttons
├─ globals.css           # Global Tailwind CSS imports & base styles
└─ favicon.ico           # Site favicon
```

- **Routing**: Files inside `app/` map directly to URL paths. For example, `app/login/page.tsx` is served at `/login`.
- **Components**: Reusable UI pieces live in `app/components/`. Currently only `Navbar.tsx` is present.
- **Styling**: TailwindCSS (v4) is configured via `tailwind.config.js` (installed as a devDependency) and imported in `globals.css`.
- **Data fetching**: The frontend does not yet contain explicit API client code; it would typically use `axios` (v1.16.1) to call backend endpoints (`/auth/*`, `/tasks/*`).

## Key Files
- `frontend/app/layout.tsx` – sets up the HTML document head and wraps page content.
- `frontend/app/login/page.tsx` – contains a placeholder login form (no submit logic yet).
- `frontend/app/components/Navbar.tsx` – renders the site title and navigation buttons.

## Build & Run
```bash
# Install dependencies (run from project root)
npm install        # in frontend folder
# Development server
npm run dev        # runs Next.js on http://localhost:3000
# Production build
npm run build && npm start
```

All scripts are defined in `frontend/package.json`.
