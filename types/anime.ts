// ============================================
// 🎬 ANIME TYPES
// ============================================

export interface AnimeItem {
  title: string;
  upload: string;
  image: string;
  link: string;
}

export interface AnimeSearchResult {
  img: string;
  title: string;
  url: string;
  genre: string[];
  duration: string | null;
}

export interface StreamServer {
  name: string;
  url: string;
}

export interface DownloadLink {
  name: string;
  link: string;
}

export interface DownloadQuality {
  type: string;
  title: string;
  links: DownloadLink[];
}

export interface AnimeDetail {
  title: string;
  info: string;
  img: string;
  sinopsis: string;
  genre: string;
  anime: string;
  producers: string;
  duration: string;
  size: string;
  streams: StreamServer[];
  download: DownloadQuality[];
}

export interface Genre {
  name: string;
  slug: string;
  count?: number;
}
