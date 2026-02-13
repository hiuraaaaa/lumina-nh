// ============================================
// 🎬 ANIME STREAM - MASTER CONFIGURATION
// ============================================
// Edit file ini untuk customize seluruh website!
// ============================================

const config = {
  // ==========================================
  // 🌐 WEBSITE INFORMATION
  // ==========================================
  site: {
    name: 'AnimeStream',
    fullName: 'AnimeStream - Nonton Anime Subtitle Indonesia',
    description: 'Streaming anime subtitle Indonesia dengan kualitas terbaik. Nonton anime favoritmu secara gratis!',
    tagline: 'Nonton Anime Subtitle Indonesia Gratis',
    url: 'https://animestream.vercel.app',
    logo: '🎬',
    favicon: '/favicon.ico',
    keywords: ['anime', 'streaming', 'subtitle indonesia', 'nonton anime', 'download anime'],
  },

  // ==========================================
  // 👤 OWNER & COPYRIGHT
  // ==========================================
  owner: {
    name: 'AnimeStream Team',
    email: 'contact@animestream.com',
    website: 'https://animestream.com',
    copyright: `© ${new Date().getFullYear()} AnimeStream. All rights reserved.`,
    copyrightText: 'Nonton anime subtitle Indonesia gratis',
  },

  // ==========================================
  // 🔗 API CONFIGURATION
  // ==========================================
  api: {
    baseUrl: 'https://www.sankavollerei.com',
    endpoints: {
      latest: '/anime/neko/latest',
      search: '/anime/neko/search',
      detail: '/anime/neko/get',
      release: '/anime/neko/release',
    },
    timeout: 10000, // 10 seconds
    retryAttempts: 3,
  },

  // ==========================================
  // ⚙️ FEATURES TOGGLE
  // ==========================================
  features: {
    search: true,
    pagination: true,
    darkMode: false, // Coming soon
    comments: false, // Coming soon
    favorites: false, // Coming soon
    analytics: false, // Google Analytics
  },

  // ==========================================
  // 🎨 THEME & COLORS
  // ==========================================
  theme: {
    primaryColor: '#667eea',
    secondaryColor: '#764ba2',
    successColor: '#10b981',
    dangerColor: '#ef4444',
    warningColor: '#f59e0b',
    darkColor: '#1f2937',
    lightColor: '#f9fafb',
  },

  // ==========================================
  // 📺 PLAYER SETTINGS
  // ==========================================
  player: {
    autoplay: false,
    defaultQuality: 'auto',
    showControls: true,
    allowFullscreen: true,
  },

  // ==========================================
  // 💾 CACHE SETTINGS
  // ==========================================
  cache: {
    enabled: true,
    duration: 5 * 60 * 1000, // 5 minutes in milliseconds
    prefix: 'anime_cache_',
  },

  // ==========================================
  // 📄 PAGINATION
  // ==========================================
  pagination: {
    itemsPerPage: 12,
    maxPages: 100,
  },

  // ==========================================
  // 🔍 SEARCH SETTINGS
  // ==========================================
  search: {
    minCharacters: 2,
    debounceDelay: 500, // milliseconds
    placeholder: 'Cari anime...',
  },

  // ==========================================
  // 📱 SOCIAL MEDIA LINKS
  // ==========================================
  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
    discord: '',
    telegram: '',
  },

  // ==========================================
  // 📋 FOOTER LINKS
  // ==========================================
  footer: {
    links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'DMCA', href: '/dmca' },
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
    ],
  },

  // ==========================================
  // 🚨 ERROR MESSAGES
  // ==========================================
  messages: {
    errors: {
      notFound: 'Anime tidak ditemukan',
      serverError: 'Terjadi kesalahan server. Silakan coba lagi nanti.',
      networkError: 'Koneksi internet bermasalah. Periksa koneksi Anda.',
      timeout: 'Request timeout. Server terlalu lama merespons.',
      unknown: 'Terjadi kesalahan yang tidak diketahui.',
    },
    loading: {
      default: 'Memuat data...',
      video: 'Memuat video player...',
      search: 'Mencari anime...',
    },
  },

  // ==========================================
  // 🔧 DEVELOPER SETTINGS
  // ==========================================
  dev: {
    debug: process.env.NODE_ENV === 'development',
    showAPILogs: process.env.NODE_ENV === 'development',
  },
};

// ==========================================
// 🚀 EXPORT CONFIGURATION
// ==========================================
export default config;

// Helper function to get config value
export const getConfig = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], config);
};

// Helper function to check if feature is enabled
export const isFeatureEnabled = (feature) => {
  return config.features[feature] === true;
};
