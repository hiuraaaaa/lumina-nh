// ============================================
// 🔌 API CLIENT
// ============================================

import config from '@/config';
import type { APIError } from '@/types';

class APIClient {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = config.api.baseUrl;
    this.timeout = config.api.timeout;
  }

  private async fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private handleError(error: any): APIError {
    if (error.name === 'AbortError') {
      return {
        message: config.messages.errors.timeout,
        code: 'TIMEOUT',
        status: 408,
      };
    }

    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      return {
        message: config.messages.errors.networkError,
        code: 'NETWORK_ERROR',
        status: 0,
      };
    }

    return {
      message: error.message || config.messages.errors.unknown,
      code: 'UNKNOWN_ERROR',
      status: 500,
    };
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    try {
      let url = `${this.baseURL}${endpoint}`;
      
      if (params) {
        const searchParams = new URLSearchParams(params);
        url += `?${searchParams.toString()}`;
      }

      if (config.dev.showAPILogs) {
        console.log('🔍 API Request:', url);
      }

      const response = await this.fetchWithTimeout(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (config.dev.showAPILogs) {
        console.log('✅ API Response:', data);
      }

      return data;
    } catch (error) {
      const apiError = this.handleError(error);
      
      if (config.dev.showAPILogs) {
        console.error('❌ API Error:', apiError);
      }

      throw apiError;
    }
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export const apiClient = new APIClient();
