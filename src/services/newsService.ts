import { NewsResponse } from '../types/news';

const API_KEY = 'pub_25440e7ed2414190871ba197dc2f6b40';
const BASE_URL = 'https://newsdata.io/api/1/news';

export async function fetchNews(page: string | null = null): Promise<NewsResponse> {
  const params = new URLSearchParams({
    apikey: API_KEY,
    language: 'en',
  });

  if (page) {
    params.append('page', page);
  }

  const response = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }

  return response.json();
}
