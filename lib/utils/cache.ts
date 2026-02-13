// ============================================
// 💾 CACHE UTILITY
// ============================================

import config from '@/config';
import type { CacheData } from '@/types';

export class CacheManager {
  private static isClient = typeof window !== 'undefined';

  static set<T>(key: string, data: T): void {
    if (!this.isClient || !config.cache.enabled) return;

    try {
      const cacheData: CacheData<T> = {
        data,
        timestamp: Date.now(),
      };
      
      const cacheKey = config.cache.prefix + key;
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Failed to set cache:', error);
    }
  }

  static get<T>(key: string): T | null {
    if (!this.isClient || !config.cache.enabled) return null;

    try {
      const cacheKey = config.cache.prefix + key;
      const cached = localStorage.getItem(cacheKey);
      
      if (!cached) return null;

      const { data, timestamp }: CacheData<T> = JSON.parse(cached);
      
      // Check if cache is expired
      if (Date.now() - timestamp > config.cache.duration) {
        this.remove(key);
        return null;
      }

      return data;
    } catch (error) {
      console.warn('Failed to get cache:', error);
      return null;
    }
  }

  static remove(key: string): void {
    if (!this.isClient) return;

    try {
      const cacheKey = config.cache.prefix + key;
      localStorage.removeItem(cacheKey);
    } catch (error) {
      console.warn('Failed to remove cache:', error);
    }
  }

  static clear(): void {
    if (!this.isClient) return;

    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(config.cache.prefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Failed to clear cache:', error);
    }
  }
}
