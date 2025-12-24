import { Drama, DramaDetail, Episode, Column, Category } from '@/types';

const BASE_URL = "https://dramabox.sansekai.my.id/api/dramabox";

// Fungsi pembantu biar request lebih stabil
async function fetchAPI(endpoint: string, params: Record<string, any> = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

      try {
          const res = await fetch(url.toString(), { 
                cache: 'no-store', 
                      headers: {
                              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                                      'Accept': 'application/json'
                                            }
                                                });
                                                    if (!res.ok) throw new Error(`API Error: ${res.status}`);
                                                        return await res.json();
                                                          } catch (error) {
                                                              console.error(`Gagal ambil data ${endpoint}:`, error);
                                                                  return null;
                                                                    }
                                                                    }

                                                                    // === 1. HOME (VIP) ===
                                                                    export async function getHomeData(): Promise<Column[]> {
                                                                      const data = await fetchAPI("/vip");
                                                                        return data?.columnVoList || [];
                                                                        }

                                                                        // === 2. TRENDING ===
                                                                        export async function getTrending(): Promise<Drama[]> {
                                                                          const data = await fetchAPI("/trending");
                                                                            return Array.isArray(data) ? data : [];
                                                                            }

                                                                            // === 3. SEARCH (Pencarian) ===
                                                                            export async function searchDrama(query: string): Promise<Drama[]> {
                                                                              const data = await fetchAPI("/search", { keyword: query }); // Perbaikan parameter: keyword/query
                                                                                return Array.isArray(data) ? data : [];
                                                                                }

                                                                                // === 4. DETAIL DRAMA ===
                                                                                export async function getDramaDetail(bookId: string): Promise<DramaDetail | null> {
                                                                                  const data = await fetchAPI("/detail", { bookId });
                                                                                    // Handle jika response dibungkus "data" atau langsung object
                                                                                      return data?.data || data || null;
                                                                                      }

                                                                                      // === 5. SEMUA EPISODE ===
                                                                                      export async function getAllEpisodes(bookId: string): Promise<Episode[]> {
                                                                                        const data = await fetchAPI("/allepisode", { bookId });
                                                                                          return Array.isArray(data) ? data : (data?.data || []);
                                                                                          }

                                                                                          // === 6. KATEGORI (Genre) ===
                                                                                          export async function getCategoryList(): Promise<Category[]> {
                                                                                            const data = await fetchAPI("/category");
                                                                                              return Array.isArray(data) ? data : [];
                                                                                              }

                                                                                              // === 7. FILTER BERDASARKAN TAG ===
                                                                                              export async function getDramaByTag(tag: string): Promise<Drama[]> {
                                                                                                const data = await fetchAPI("/tag", { tagName: tag });
                                                                                                  return Array.isArray(data) ? data : [];
                                                                                                  }

                                                                                                  // === 8. SHORTS (Video Pendek ala TikTok) ===
                                                                                                  export async function getShorts(): Promise<any[]> {
                                                                                                    const data = await fetchAPI("/shorts");
                                                                                                      return Array.isArray(data) ? data : [];
                                                                                                      }

                                                                                                      // === 9. PLAY URL (Jika butuh link streaming khusus) ===
                                                                                                      export async function getVideoUrl(chapterId: string): Promise<string> {
                                                                                                        const data = await fetchAPI("/play", { chapterId });
                                                                                                          return data?.url || "";
                                                                                                          }

                                                                                                          // === 10. CONFIG/LAINNYA ===
                                                                                                          export async function getAppConfig() {
                                                                                                            return await fetchAPI("/config");
                                                                                                            }
                                                                                                            