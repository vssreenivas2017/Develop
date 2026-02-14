# Gym Streak Backend API

Express.js server for Gym Streak fitness social app.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure PostgreSQL database in `.env`

4. Start development server:
```bash
npm run dev
```

Server runs on `http://localhost:5000`

## API Endpoints (TODO)

- **Auth**: `/api/auth` - Login, Register, Logout
- **Users**: `/api/users` - Profile, Settings
- **Workouts**: `/api/workouts` - Log workouts, Get history
- **Snaps**: `/api/snaps` - Send snaps, View snaps
- **Friends**: `/api/friends` - Add friends, Get friends list

## Real-time Features

- Socket.io for snap delivery
- Live streak updates
- Friend notifications

## Database Schema (TODO)

- Users
- Workouts
- Snaps
- Friends
- Streaks
