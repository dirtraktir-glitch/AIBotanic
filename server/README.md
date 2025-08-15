# Garden Assistant API

Express + MongoDB API for chat, image analysis and garden planning.

## Setup

- Copy `.env.example` to `.env` and fill values
- Ensure MongoDB is running
- Provide Google Cloud Vision credentials (`GOOGLE_APPLICATION_CREDENTIALS`)
- Provide Firebase Admin credentials (application default or service account)

## Scripts

- `npm run dev` – start with nodemon
- `npm test` – run tests

## Endpoints

- `POST /chat` – Chat with OpenAI or template fallback
- `POST /analyze-image` – Analyze base64 image via Google Vision
- `GET /plants` – List plants from DB
- `POST /plan` – Save garden layout plan