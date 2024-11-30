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

export function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-background border-t">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/ghar-album.jpeg"
          alt="Album cover"
          width={48}
          height={48}
          className="w-12 h-12 rounded aspect-square object-cover"
        />
        <div>
          <h3 className="text-sm font-medium">Ghar</h3>
          <p className="text-xs text-muted-foreground">Bharat Chauhan</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 flex-1 max-w-xl">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button onClick={togglePlay} variant="ghost" size="icon">
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2 w-full">
          <span className="text-xs w-12 text-right">
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleSeek}
            className="w-full"
          />
          <span className="text-xs w-12">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          {volume === 0 ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
        <Slider
          value={[volume]}
          max={1}
          step={0.01}
          onValueChange={(value) => setVolume(value[0])}
          className="w-24"
        />
      </div>
      <audio
        ref={audioRef}
        src="/music/ghar.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
