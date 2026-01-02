# Rhino_Daizo App

A React + Vite food ordering frontend with a lightweight Express backend for orders. State is managed with Redux Toolkit, routing via React Router, and styling split into modular CSS under `src/styles`.

## Project Layout
- Frontend: React 19 + Vite entrypoint (this folder)
- Backend API: simple Express server in [backend/app.js](backend/app.js) using JSON data under `backend/data`
- Static assets: images in [public](public) and component-specific assets in [src/assets](src/assets)

## Prerequisites
- Node.js 18+ and npm

## Quick Start
1) Install frontend deps:
   ```bash
   npm install
   ```
2) Start backend API (port 3000):
   ```bash
   cd backend
   npm install
   npm start
   ```
3) In another shell, start the frontend dev server (defaults to http://localhost:5173):
   ```bash
   npm run dev
   ```
4) Open the frontend URL; placing an order posts to `http://localhost:3000/orders`.

## Frontend Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint checks

## Backend Script
- `npm start` – run the Express API defined in [backend/app.js](backend/app.js)

## Notes
- Orders are persisted to `backend/data/orders.json`; available meals are read from `backend/data/available-meals.json`.
- CSS is organized under `src/styles` and imported via `src/index.css` to keep feature styles separated (header, meals, cart, forms, modal, errors).
