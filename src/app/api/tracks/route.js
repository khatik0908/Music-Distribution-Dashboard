// src/app/api/tracks/route.js
import { NextResponse } from 'next/server';
import { tracks } from '../data';

// GET /api/tracks
export async function GET(request) {
  return NextResponse.json(tracks);
}

// POST /api/tracks
export async function POST(request) {
  const newTrackData = await request.json();
  
  const newTrack = {
    id: tracks.length + 1,
    ...newTrackData,
    status: 'Submitted',
  };

  tracks.push(newTrack);
  
  return NextResponse.json(newTrack, { status: 201 });
}