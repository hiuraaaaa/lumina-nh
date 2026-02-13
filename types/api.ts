// ============================================
// 🔌 API RESPONSE TYPES
// ============================================

import { AnimeItem, AnimeSearchResult, AnimeDetail } from './anime';

export interface APIResponse<T> {
  status: string;
  creator: string;
  success: boolean;
  data?: T;
  results?: T;
  message?: string;
  error?: string;
}

export interface LatestAnimeResponse extends APIResponse<AnimeItem[]> {
  results: AnimeItem[];
}

export interface SearchAnimeResponse extends APIResponse<AnimeSearchResult[]> {
  data: AnimeSearchResult[];
}

export interface AnimeDetailResponse extends APIResponse<AnimeDetail> {
  data: AnimeDetail;
}

export interface APIError {
  message: string;
  code?: string;
  status?: number;
}

export interface CacheData<T> {
  data: T;
  timestamp: number;
}
