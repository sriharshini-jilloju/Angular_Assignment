# Angular Assignment (Angular 20) — Vercel Deployment
# Sri Harshini Jilloju - N01649103
**Live App:** https://angular-assignment-two-opal.vercel.app/

## Overview
A simple Angular 20 app with:
- **Home Page** — shows a welcome message and the list of form submissions.
- **Users Page** — fetches and displays users from the public API `https://jsonplaceholder.typicode.com/users`.
- **Form Page** — submit a form; submitted entries appear on the **Home** page.

## Tech Stack
- Angular 20 (`@angular/cli` 20.x, application builder)
- TypeScript 5.x
- Hosted on Vercel (static site)

## Quick Start (Local)
```bash
# 1) Install deps
npm install

# 2) Run dev server (http://localhost:4200/)
npm start
## Scripts
```json
{
  "start": "ng serve",
  "build": "ng build --configuration production",
  "watch": "ng build --watch --configuration development",
  "test": "ng test"
}
# Build (Production)
-npm run build
## Build output (Angular 20 application builder):
- dist/my-angular-app/browser
- Ensure src/index.html contains:
- <base href="/" />

## Deploy to Vercel
- Push your code to GitHub.

- In Vercel → New Project → import your repo.

- Set the following:

- Framework Preset: Angular

- Build Command: npm run build

- Output Directory: dist/my-angular-app/browser

- Click Deploy.

# API Used
- Users: https://jsonplaceholder.typicode.com/users
```

## Screenshots







