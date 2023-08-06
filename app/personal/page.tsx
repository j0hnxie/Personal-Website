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
    <div className="flex min-h-screen w-full flex-row p-24 pt-48">
      <div className='flex flex-col w-full'>
        <div className='text-pagetitle font-bold mb-8'>
          Personal
        </div>
        <hr/>
        <div className='flex mt-8'>
          {/* <div className="flex flex-col flex-1">
            <div className="text-title font-bold">
              My Top Songs: 
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-title font-bold">
              My Top Artists: 
            </div>
          </div> */}
          <div className='text-pagetitle text-bold'>
            Under Construction
          </div>
        </div>
      </div>
    </div>
  )
}
