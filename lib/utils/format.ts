// ============================================
// 🎨 FORMAT UTILITIES
// ============================================

export const formatUtils = {
  // Truncate text
  truncate: (text: string, maxLength: number = 100): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  },

  // Sanitize HTML
  sanitizeHTML: (html: string): string => {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
  },

  // Format date
  formatDate: (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  },

  // Get slug from title
  slugify: (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  // Extract anime ID from URL
  extractAnimeId: (url: string): string | null => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      return pathname.split('/').filter(Boolean).pop() || null;
    } catch {
      return null;
    }
  },

  // Format file size
  formatFileSize: (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  },

  // Format duration
  formatDuration: (duration: string | null): string => {
    if (!duration) return 'Unknown';
    return duration;
  },

  // Parse genres
  parseGenres: (genreString: string): string[] => {
    return genreString.split(',').map(g => g.trim()).filter(Boolean);
  },
};
