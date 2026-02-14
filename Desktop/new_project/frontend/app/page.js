'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">🔥 Gym Streak</h1>
        <p className="text-xl mb-8">Share your daily gym percentage with friends</p>
        
        <div className="space-x-4">
          <Link href="/login" className="btn-primary bg-white text-blue-500 hover:bg-gray-100">
            Sign In
          </Link>
          <Link href="/register" className="btn-primary">
            Sign Up
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="card bg-opacity-90">
            <h3 className="text-lg font-bold mb-2 text-gray-800">📊 Track Workouts</h3>
            <p className="text-gray-600">Log your daily exercises and track progress</p>
          </div>
          <div className="card bg-opacity-90">
            <h3 className="text-lg font-bold mb-2 text-gray-800">🔥 Build Streaks</h3>
            <p className="text-gray-600">Maintain daily streak and compete with friends</p>
          </div>
          <div className="card bg-opacity-90">
            <h3 className="text-lg font-bold mb-2 text-gray-800">📸 Share Snaps</h3>
            <p className="text-gray-600">Send daily gym progress snaps to friends</p>
          </div>
        </div>
      </div>
    </main>
  );
}
