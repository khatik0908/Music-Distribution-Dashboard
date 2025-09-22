'use client';

import { useRouter } from 'next/navigation';
import ParticlesBackground from '@/components/ParticlesBackground'; // Import the new component

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    // Use a relative container to position the background
    <div className="relative min-h-screen"> 
      <ParticlesBackground />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Label // Lift</h1>
            <p className="mt-2 text-gray-300">Log in to your dashboard</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username" name="username" type="text" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-gray-700/50 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username (any will work)"
                />
              </div>
              <div>
                <label htmlFor="password-address" className="sr-only">Password</label>
                <input
                  id="password" name="password" type="password" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-gray-700/50 placeholder-gray-400 text-white rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password (any will work)"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}