// ============================================
// ✅ VALIDATION UTILITIES
// ============================================

import config from '@/config';

export const validationUtils = {
  // Validate search query
  isValidSearchQuery: (query: string): boolean => {
    return query.trim().length >= config.search.minCharacters;
  },

  // Validate URL
  isValidURL: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Validate page number
  isValidPage: (page: number): boolean => {
    return Number.isInteger(page) && page > 0 && page <= config.pagination.maxPages;
  },

  // Validate anime URL
  isValidAnimeURL: (url: string): boolean => {
    if (!url) return false;
    return url.includes('nekopoi.care') || url.startsWith('https://');
  },

  // Sanitize input
  sanitizeInput: (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  },
};
