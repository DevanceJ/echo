"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Heart,
  ListMusic,
  Mic,
  Share2Icon,
  MonitorSmartphone,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useCurrentSongStore } from "@/hooks/useStore";

export function NowPlaying() {
  const { currentSong } = useCurrentSongStore();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current && currentSong.src) {
      audioRef.current.src = currentSong.src;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong.src]);

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
    return `${minutes}:${seconds.toString().padStart(2, "0")}
`;
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setVolume(audioRef.current.muted ? 0 : 1);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="mx-auto grid grid-cols-3 md:grid-cols-3 items-center md:gap-4 p-2.5">
        <div className="flex items-center space-x-4">
          {!currentSong.album_cover ? (
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover shadow-md hover:scale-105
             transition-transform"
            />
          ) : (
            <Image
              src={currentSong.album_cover}
              alt="Album cover"
              width={56}
              height={56}
              className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover shadow-md hover:scale-105
               transition-transform"
            />
          )}
          <div className="hidden md:flex md:flex-col">
            <div className="text-sm font-semibold">
              {currentSong.name ? currentSong.name : ""}
            </div>
            <div className="text-xs text-muted-foreground">
              {currentSong.artist ? currentSong.artist : ""}
            </div>
          </div>
          <Heart className="h-5 w-5 cursor-pointer hover:scale-105 hover:fill-red-600 hover:text-red-600 transition-all duration-200" />
          <ListMusic className="h-5 w-5 cursor-pointer hover:scale-105 transition-all duration-200" />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/20 transition-colors">
              <SkipBack className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
              onClick={togglePlay}
              variant="ghost"
              disabled={!currentSong.src}
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
              className="hover:bg-accent/20 transition-colors">
              <SkipForward className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs w-10 text-right tabular-nums">
              {currentTime ? formatTime(currentTime) : "0:00"}
            </span>
            <Slider
              value={[currentTime]}
              disabled={!currentSong.src}
              max={duration || 1}
              step={1}
              onValueChange={handleSeek}
            />
            <span className="text-xs w-10 tabular-nums">
              {duration ? formatTime(duration) : "0:00"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2 md:pr-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            disabled={!currentSong.src}
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
            disabled={!currentSong.src}
            onValueChange={(value) => setVolume(value[0])}
            className="w-24 hidden md:flex"
          />
          <Mic className="h-5 w-5 cursor-pointer hover:scale-105 transition-all duration-200" />
          <MonitorSmartphone className="h-5 w-5 cursor-pointer hover:scale-105 transition-all duration-200" />
          <Share2Icon className="h-5 w-5 cursor-pointer hover:scale-105 transition-all duration-200" />
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
