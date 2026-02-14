// ============================================
// 🪝 CUSTOM REACT HOOKS - FINAL FIX
// ============================================

'use client';

import { useState, useEffect } from 'react';
import { animeAPI } from '@/lib/api/endpoints';
import { CacheManager } from '@/lib/utils/cache';
import type { AnimeItem, AnimeSearchResult, AnimeDetail, APIError } from '@/types';

// Hook for fetching latest anime
export function useLatestAnime() {
  const [data, setData] = useState<AnimeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<APIError | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const cached = CacheManager.get<AnimeItem[]>('latest');
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }

        const response = await animeAPI.getLatest();
        if (response.success && response.results) {
          setData(response.results);
          CacheManager.set('latest', response.results);
        }
      } catch (err) {
        setError(err as APIError);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

// Hook for searching anime
export function useSearchAnime(query: string) {
  const [data, setData] = useState<AnimeSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);

  useEffect(() => {
    if (!query || query.length < 2) {
      setData([]);
      return;
    }

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const cacheKey = `search_${query}`;
        const cached = CacheManager.get<AnimeSearchResult[]>(cacheKey);
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }

        const response = await animeAPI.search(query);
        if (response.data) {
          setData(response.data);
          CacheManager.set(cacheKey, response.data);
        }
      } catch (err) {
        setError(err as APIError);
      } finally {
        setLoading(false);
      }
    }

    const timeoutId = setTimeout(fetchData, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return { data, loading, error };
}

// Hook for fetching anime detail - FINAL FIX
export function useAnimeDetail(url: string | null) {
  const [data, setData] = useState<AnimeDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const cacheKey = `detail_${url}`;
        const cached = CacheManager.get<AnimeDetail>(cacheKey);
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }

        // FINAL FIX: Type assertion - TypeScript now knows url is string
        const response = await animeAPI.getDetail(url as string);
        if (response.success && response.data) {
          setData(response.data);
          CacheManager.set(cacheKey, response.data);
        }
      } catch (err) {
        setError(err as APIError);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  const refetch = () => {
    if (url) {
      CacheManager.remove(`detail_${url}`);
    }
  };

  return { data, loading, error, refetch };
}
