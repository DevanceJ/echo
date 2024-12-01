import { create } from "zustand";

type Song = {
  id: number;
  created_at: string;
  name: string;
  artist: string;
  album_cover: string;
  src: string;
};

interface SongStore {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
}
interface CurrentSongStore {
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
}

export const useSongsStore = create<SongStore>((set) => ({
  songs: [],
  setSongs: (songs: Song[]) => set({ songs }),
}));

export const useCurrentSongStore = create<CurrentSongStore>((set) => ({
  currentSong: {
    id: 0,
    created_at: "",
    name: "",
    artist: "",
    album_cover: "",
    src: "",
  },
  setCurrentSong: (currentSong: Song) => set({ currentSong }),
}));
