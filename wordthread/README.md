# WordThread

This is the base repository for the WordThread application.

## Project Structure

- `server/`: Node/Express Proxy (BFF)
- `web/`: React/Vite Frontend

## Setup

1.  **Install dependencies:**
    ```bash
    npm run install:all
    ```

2.  **Setup environment variables:**

    In the `server` directory, copy `.env.example` to `.env`:
    ```bash
    cd server
    cp .env.example .env
    ```

    In the `web` directory, copy `.env.example` to `.env`:
    ```bash
    cd ../web
    cp .env.example .env
    ```

3.  **Start the development servers:**
    ```bash
    npm run dev
    ```

## CI & Tests

- ESLint + Prettier for linting.
- Vitest + RTL for unit tests.
- Playwright for E2E tests.
- Lighthouse CI for performance monitoring.
