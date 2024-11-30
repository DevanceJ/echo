type ExternalUrls = {
  spotify: string;
};

export type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

type AlbumImage = {
  height: number;
  url: string;
  width: number;
};

export type Album = {
  album_type: string; // e.g., 'album', 'single'
  artists: Artist[];
  available_markets: string[]; // List of country codes
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: AlbumImage[];
  name: string;
  release_date: string; //'2024-10-04'
  release_date_precision: string; // e.g., 'day', 'month', 'year'
  total_tracks: number;
  type: string;
  uri: string;
};

export type UserPlaylists = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: AlbumImage[];
  name: string;
  owner: {
    display_name: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};
