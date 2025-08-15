# Smart Garden (React Native + Express)

## Structure

- `rn-app/` – Expo React Native app
  - `src/components` – UI components (e.g., charts, images)
  - `src/screens` – App screens (Home, Plants, Planner, Profile)
  - `src/services` – API, notifications
  - `src/models` – Data models (RN-side types)
  - `src/assets` – Images, fonts
  - `src/utils` – Helpers (storage, etc.)
- `server/` – Node.js Express API
  - `src/models` – MongoDB models
  - `src/routes` – API routes
  - `src/utils` – Middleware, auth, errors
  - `src/templates` – FAQ templates for chatbot

## Frontend (Expo)

- Install deps: `cd rn-app && npm install`
- Run web: `npm run web`
- Run Android: `npm run android`

## Backend (Express)

- Install deps: `cd server && npm install`
- Copy env: `cp .env.example .env`
- Run dev: `npm run dev`
- Test: `npm test`

## Notable features

- Minimalist green theme (Material Design, react-native-paper)
- Bottom tab navigation with icons
- i18n (RU/EN)
- Push notifications (Expo)
- Offline cache via AsyncStorage
- Charts via react-native-chart-kit
- REST API: chat (OpenAI), image analysis (GCV), plants, plan
- Auth via Firebase (middleware expects ID token)
