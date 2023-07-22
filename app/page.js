"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useRef ,useState} from 'react'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlayOrPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    }else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
    <audio
      ref={audioRef}
      src="music.mp3"
      className='nativeAudioPlayer'
      controls
    >
      
    </audio>
    {
      isPlaying ? (
        <p onClick={() => handlePlayOrPause()}>Pause</p>
      ) : (
        <p onClick={() => handlePlayOrPause()}>Play</p>
      )
    }
    </>
  )
}
