// ============================================
// 🔗 API ENDPOINTS
// ============================================

import { apiClient } from './client';
import config from '@/config';
import type {
  LatestAnimeResponse,
  SearchAnimeResponse,
  AnimeDetailResponse,
} from '@/types';

export const animeAPI = {
  // Get latest anime
  getLatest: async (): Promise<LatestAnimeResponse> => {
    return apiClient.get<LatestAnimeResponse>(config.api.endpoints.latest);
  },

  // Get anime by page
  getByPage: async (page: number): Promise<LatestAnimeResponse> => {
    return apiClient.get<LatestAnimeResponse>(`${config.api.endpoints.release}/${page}`);
  },

  // Search anime
  search: async (query: string): Promise<SearchAnimeResponse> => {
    return apiClient.get<SearchAnimeResponse>(`${config.api.endpoints.search}/${query}`);
  },

  // Get anime detail
  getDetail: async (url: string): Promise<AnimeDetailResponse> => {
    const encodedUrl = encodeURIComponent(url);
    return apiClient.get<AnimeDetailResponse>(
      config.api.endpoints.detail,
      { url: encodedUrl }
    );
  },
};
