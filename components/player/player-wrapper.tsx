"use client";

import { NowPlaying } from "./now-playing";

export function PlayerWrapper() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <NowPlaying className="w-full" />
    </div>
  );
}
