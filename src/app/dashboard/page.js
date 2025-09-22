'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const getStatusColor = (status) => {
  switch (status) {
    case 'Published':
      return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
    case 'Submitted':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
    case 'Draft':
      return 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100';
    default:
      return 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100';
  }
};

const SkeletonRow = () => (
  <tr className="animate-pulse">
    <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div></td>
    <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div></td>
    <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div></td>
    <td className="px-6 py-4"><div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div></td>
  </tr>
);

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md animate-pulse">
    <div className="flex justify-between items-start">
      <div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-2"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
      </div>
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
    </div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24 mt-3"></div>
  </div>
);

export default function DashboardPage() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch('/api/tracks');
        const data = await res.json();
        setTracks(data);
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchTracks();
  }, []);

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full sm:w-64 animate-pulse"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full sm:w-auto min-w-[158px] animate-pulse"></div>
          </div>
        </div>
        <div>
          <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr><th colSpan="4" className="p-4"></th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <SkeletonRow /><SkeletonRow /><SkeletonRow /><SkeletonRow />
              </tbody>
            </table>
          </div>
          <div className="md:hidden grid grid-cols-1 gap-4">
            <SkeletonCard /><SkeletonCard /><SkeletonCard />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Your Tracks</h1>
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <input
            type="text"
            placeholder="Search by title or artist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link href="/upload" className="w-full sm:w-auto">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap w-full sm:w-auto">
              Upload New Track
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Artist</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Release Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredTracks.map((track) => (
                <tr key={track.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
                  <td className="px-6 py-4 whitespace-nowrap"><Link href={`/track/${track.id}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">{track.title}</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-600 dark:text-gray-300">{track.artist}</div></td>
                  <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-600 dark:text-gray-300">{track.releaseDate}</div></td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(track.status)}`}>{track.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden grid grid-cols-1 gap-4">
          {filteredTracks.map((track) => (
            <Link href={`/track/${track.id}`} key={track.id} className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{track.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{track.artist}</p>
                </div>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(track.status)}`}>{track.status}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{track.releaseDate}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}