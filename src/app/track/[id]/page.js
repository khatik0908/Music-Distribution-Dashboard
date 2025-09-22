'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function TrackDetailPage() {
  const params = useParams();
  const { id } = params;

  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchTrack = async () => {
        try {
          const res = await fetch(`/api/tracks/${id}`);
          if (!res.ok) {
            throw new Error('Track not found');
          }
          const data = await res.json();
          setTrack(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchTrack();
    }
  }, [id]);

  if (loading) return <div className="text-center p-10 text-gray-800 dark:text-gray-200">Loading track details...</div>;
  if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  if (!track) return null;

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <Link href="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline">
          &larr; Back to Dashboard
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{track.title}</h1>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p><span className="font-semibold">Artist:</span> {track.artist}</p>
          <p><span className="font-semibold">Release Date:</span> {track.releaseDate}</p>
          <p><span className="font-semibold">Genre:</span> {track.genre}</p>
          <p>
            <span className="font-semibold">Status:</span> 
            <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
              {track.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}