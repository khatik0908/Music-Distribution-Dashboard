'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function UploadPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackData, setTrackData] = useState({
    title: '',
    artist: '',
    releaseDate: '',
    genre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrackData({ ...trackData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trackData),
      });

      if (res.ok) {
        toast.success('Track uploaded successfully!');
        router.push('/dashboard');
      } else {
        toast.error('Failed to submit track.');
      }
    } catch (error) {
      toast.error('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Upload New Track</h1>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Track Title</label>
            <input
              type="text" name="title" id="title" value={trackData.title} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="artist" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Artist Name</label>
            <input
              type="text" name="artist" id="artist" value={trackData.artist} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="releaseDate" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Release Date</label>
            <input
              type="date" name="releaseDate" id="releaseDate" value={trackData.releaseDate} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="genre" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Genre</label>
            <input
              type="text" name="genre" id="genre" value={trackData.genre} onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200"
              required
            />
          </div>

          <div className="flex items-center justify-end">
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 disabled:bg-blue-300">
              {isSubmitting ? 'Submitting...' : 'Submit Track'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}