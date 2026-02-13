'use client'
import { useState } from 'react'
import type { StreamServer } from '@/types'
import ServerSelector from '@/components/features/ServerSelector'

export default function VideoPlayer({ streams }: { streams: StreamServer[] }) {
  const [currentServer, setCurrentServer] = useState(0)
  
  return (
    <div className="video-player">
      <ServerSelector 
        servers={streams}
        current={currentServer}
        onChange={setCurrentServer}
      />
      <div className="player-wrapper">
        <iframe 
          src={streams[currentServer]?.url}
          allowFullScreen
        />
      </div>
    </div>
  )
}
