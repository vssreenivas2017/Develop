# 🔥 Gym Streak - Social Fitness App

A Snapchat-like fitness social app where users can track their daily gym percentage and share workout "snaps" with friends while maintaining daily streaks.

## Project Structure

```
gym-streak/
├── backend/              # Node.js + Express API server
│   ├── server.js         # Main server file
│   ├── package.json      # Dependencies
│   ├── .env.example      # Environment variables template
│   └── README.md         # Backend docs
│
└── frontend/             # Next.js + React web app
    ├── app/              # Next.js app directory
    ├── lib/              # Utilities and stores
    ├── styles/           # Global styles
    ├── package.json      # Dependencies
    ├── tailwind.config.js
    └── README.md         # Frontend docs
```

## Features (Roadmap)

### Phase 1: MVP
- ✅ User authentication (login/register)
- [ ] Workout logging
- [ ] Daily gym percentage calculation
- [ ] Snap sharing with friends
- [ ] Streak tracking

### Phase 2: Social
- [ ] Friend system (add/remove/search)
- [ ] Real-time snap notifications
- [ ] Snap history/gallery
- [ ] User profiles

### Phase 3: Advanced
- [ ] In-app messaging
- [ ] Leaderboards
- [ ] Achievements/badges
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL + Sequelize ORM
- **Real-time**: Socket.io
- **Auth**: JWT + bcrypt
- **API**: RESTful

### Frontend
- **Framework**: Next.js 14
- **UI**: React 18 + Tailwind CSS
- **State**: Zustand
- **HTTP**: Axios
- **Real-time**: Socket.io client
- **Animation**: Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- npm or yarn

### Backend Setup

1. Navigate to backend:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure PostgreSQL in `.env`:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gym_streak
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
PORT=5000
```

5. Start development server:
```bash
npm run dev
```

Backend runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Start development server:
```bash
npm run dev
```

Frontend runs on `http://localhost:3000`

## API Endpoints (To Be Implemented)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh token

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile
- `GET /api/users/:id/stats` - Get user statistics

### Workouts
- `POST /api/workouts` - Create workout
- `GET /api/workouts/:userId` - Get user workouts
- `DELETE /api/workouts/:id` - Delete workout

### Snaps
- `POST /api/snaps` - Send snap
- `GET /api/snaps` - Get received snaps
- `PUT /api/snaps/:id/view` - Mark snap as viewed

### Friends
- `POST /api/friends/add` - Send friend request
- `GET /api/friends` - Get friends list
- `DELETE /api/friends/:friendId` - Remove friend

### Streaks
- `GET /api/streaks/:userId` - Get user streak info
- `GET /api/streaks/leaderboard` - Get global leaderboard

## Real-time Events (Socket.io)

- `snap:sent` - New snap received
- `snap:viewed` - Snap was viewed
- `streak:updated` - Streak updated
- `friend:request` - Friend request received
- `friend:accepted` - Friend request accepted
- `notification:new` - New notification

## Environment Variables

### Backend (.env)
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gym_streak
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

## Development

### Running Both Servers
Open two terminals:

Terminal 1 (Backend):
```bash
cd backend && npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend && npm run dev
```

## Database Schema (To Be Created)

### Users
- id (PK)
- username (unique)
- email (unique)
- password_hash
- profile_picture
- bio
- created_at
- updated_at

### Workouts
- id (PK)
- user_id (FK)
- exercise_type
- duration
- calories_burned
- intensity
- date
- created_at

### Snaps
- id (PK)
- sender_id (FK)
- recipient_id (FK)
- gym_percentage
- caption
- viewed
- created_at
- viewed_at

### Streaks
- id (PK)
- user_id (FK)
- current_streak
- longest_streak
- last_workout_date
- updated_at

### Friends
- id (PK)
- user_id (FK)
- friend_id (FK)
- status (pending/accepted)
- created_at

## Testing

Run tests:
```bash
# Backend
cd backend && npm test

# Frontend
cd frontend && npm test
```

## Deployment

### Backend
- Render.com / Railway / Heroku
- PostgreSQL on cloud (AWS RDS, Supabase, etc.)

### Frontend
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

## Contributing

1. Create feature branch: `git checkout -b feature/feature-name`
2. Commit changes: `git commit -m "Add feature"`
3. Push to branch: `git push origin feature/feature-name`
4. Open pull request

## License

ISC

## Contact

Questions? Open an issue or reach out!

---

**Happy coding! 🚀**
