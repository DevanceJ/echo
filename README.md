# Echo 🎵

## Overview

Echo is a music dashboard powered by Spotify Web API.

## 🚀 Features

- **Spotify Authentication**: Secure login using Spotify credentials
- **Spotify Insights**:
  - Recently Played Tracks
  - Personal Album Library
  - Latest Releases
- **Responsive Design**: Fully responsive layout that works across devices
- **Modern UI**: Clean, intuitive user interface

## 🛠 Tech Stack

- **Frontend**:

  - Next.js 14
  - TypeScript
  - shadcn/ui
  - Tailwind CSS

- **Authentication**:
  - Spotify OAuth
  - Next.js Authentication (Authjs v5)

## 📦 Prerequisites

- Node.js (v18+ recommended)
- npm
- Spotify Developer Account

## 🔧 Installation

1. Clone the repository

   ```bash
   git clone https://github.com/DevanceJ/echo.git
   cd echo
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following:

   ```
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

   AUTH_SECRET

   ```bash
   npx auth secret
   ```

   SPOTIFY: Go to [https://developer.spotify.com/documentation/web-api](https://developer.spotify.com/documentation/web-api)

4. Run the development server

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Authentication Flow

Echo uses Spotify's OAuth 2.0 for authentication:

- Users are redirected to Spotify's login page
- After successful authentication, users are returned to the application
- A session is created and maintained

## 📱 Responsive Design

The application is fully responsive and provides an optimal viewing experience across:

- Mobile devices
- Tablets
- Desktop computers

---

**Disclaimer**: No data is stored beyond the current session.
