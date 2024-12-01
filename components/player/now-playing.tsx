import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Define a type for our songs
type Song = {
  title: string;
  artist: string;
  src: string;
  albumCover: string;
};

const SONGS: Song[] = [
  {
    title: "Ode To The Mets",
    artist: "The Strokes",
    src: "/music/ode.mp3",
    albumCover: "/images/odetothemets.jpeg",
  },
  {
    title: "Ghar",
    artist: "Bharat Chauhan",
    src: "/music/Ghar.mp3",
    albumCover: "/images/ghar-album.jpeg",
  },
];

export function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = SONGS[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.src;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) {
      return "0:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setVolume(audioRef.current.muted ? 0 : 1);
    }
  };
  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % SONGS.length);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + SONGS.length) % SONGS.length
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border shadow-lg">
      <div className=" mx-auto grid grid-cols-3 md:grid-cols-3 items-center md:gap-4 p-2.5">
        <div className="flex items-center space-x-4">
          <Image
            src={currentSong.albumCover}
            alt="Album cover"
            width={56}
            height={56}
            className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover shadow-md hover:scale-105
             transition-transform"
          />
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold">{currentSong.title}</h3>
            <p className="text-xs text-muted-foreground">
              {currentSong.artist}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevSong}
              className="hover:bg-accent/20 transition-colors">
              <SkipBack className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="icon"
              className="bg-primary/10 hover:bg-primary/20 rounded-full p-2 transition-colors">
              {isPlaying ? (
                <Pause className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              ) : (
                <Play className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextSong}
              className="hover:bg-accent/20 transition-colors">
              <SkipForward className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs w-10 text-right tabular-nums">
              {formatTime(currentTime)}
            </span>
            <Slider
              value={[currentTime]}
              max={duration || 1}
              step={1}
              onValueChange={handleSeek}
            />
            <span className="text-xs w-10 tabular-nums">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="hover:bg-accent/20 transition-colors">
            {volume === 0 ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
          <Slider
            value={[volume]}
            max={1}
            step={0.01}
            onValueChange={(value) => setVolume(value[0])}
            className="w-24 hidden md:flex"
          />
        </div>

        <audio
          ref={audioRef}
          src={currentSong.src}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    </div>
  );
}
