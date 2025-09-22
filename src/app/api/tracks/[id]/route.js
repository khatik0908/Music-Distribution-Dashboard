// src/app/api/tracks/[id]/route.js
import { NextResponse } from 'next/server';
import { tracks } from '../../data';

export async function GET(request, { params }) {
  const trackId = parseInt(params.id); 
  const track = tracks.find(t => t.id === trackId);

  if (track) {
    return NextResponse.json(track);
  } else {
    return NextResponse.json({ message: 'Track not found' }, { status: 404 });
  }
}