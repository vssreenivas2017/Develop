const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const { sequelize } = require('./models');

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Gym Streak API is running!', timestamp: new Date() });
});

// Authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// TODO: Add routes
// const userRoutes = require('./routes/users');
// const workoutRoutes = require('./routes/workouts');
// const snapRoutes = require('./routes/snaps');
// const friendRoutes = require('./routes/friends');

// app.use('/api/users', userRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/snaps', snapRoutes);
// app.use('/api/friends', friendRoutes);

// Socket.io events
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

  // TODO: Add socket events for real-time snap delivery
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Initialize database and start server
sequelize
  .sync({ alter: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`🚀 Gym Streak API running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log('📊 Database connected successfully');
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

module.exports = { app, io };
