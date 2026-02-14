'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">🔥 Gym Streak</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user?.firstName}! 👋
          </h2>
          <p className="text-gray-600">
            You're logged in as <strong>{user?.email}</strong>
          </p>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Profile Info</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
              <p><strong>Gender:</strong> {user?.gender}</p>
              <p><strong>Age:</strong> {user?.age}</p>
              <p><strong>Username:</strong> @{user?.username}</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-gray-800 mb-2">🎯 Today's Goal</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">0%</div>
              <p className="text-sm text-gray-600">Gym Percentage</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-gray-800 mb-2">🔥 Current Streak</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">0</div>
              <p className="text-sm text-gray-600">Days</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/workouts"
            className="card hover:shadow-lg transition cursor-pointer text-center"
          >
            <div className="text-4xl mb-2">💪</div>
            <h3 className="text-lg font-bold text-gray-800">Log Workout</h3>
            <p className="text-sm text-gray-600">Track your gym session</p>
          </Link>

          <Link
            href="/snaps"
            className="card hover:shadow-lg transition cursor-pointer text-center"
          >
            <div className="text-4xl mb-2">📸</div>
            <h3 className="text-lg font-bold text-gray-800">Send Snap</h3>
            <p className="text-sm text-gray-600">Share your daily progress</p>
          </Link>

          <Link
            href="/friends"
            className="card hover:shadow-lg transition cursor-pointer text-center"
          >
            <div className="text-4xl mb-2">👥</div>
            <h3 className="text-lg font-bold text-gray-800">Friends</h3>
            <p className="text-sm text-gray-600">Manage your friends</p>
          </Link>

          <Link
            href="/profile"
            className="card hover:shadow-lg transition cursor-pointer text-center"
          >
            <div className="text-4xl mb-2">👤</div>
            <h3 className="text-lg font-bold text-gray-800">Profile</h3>
            <p className="text-sm text-gray-600">Edit your profile</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
