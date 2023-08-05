'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Personal() {
  const [songs, setSongs] = useState<any[]>()
  const [artists, setArtists] = useState<any[]>()

  // const songAPICall = async () => {
  //   const songAPIResponse = axios.get("https://api.spotify.com/v1/me/top/songs")
  //   console.log(songAPIResponse)
  // }

  // const artistAPICall = async () => {
  //   const artistAPIResponse = axios.get("https://api.spotify.com/v1/me/top/artists")
  //   console.log(artistAPIResponse)
  // }

  // useEffect(() => {
  //   songAPICall()
  //   artistAPICall()
  // }, [])

  return (
    <div className="flex min-h-screen w-full flex-row p-24">
      <div className="flex flex-col flex-1 pt-24">
        <div className="text-title font-bold">
          My Top Songs: 
        </div>
      </div>
      <div className="flex flex-col flex-1 pt-24">
        <div className="text-title font-bold">
          My Top Artists: 
        </div>
      </div>
    </div>
  )
}
