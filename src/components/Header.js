'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // 1. Import the router

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter(); // 2. Initialize the router

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 3. Create the logout handler
  const handleLogout = () => {
    router.push('/'); // Redirect to the login page
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold text-gray-800 dark:text-white">
          Label // Lift
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          {isMounted && (
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          )}

          {/* 4. Add the Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}