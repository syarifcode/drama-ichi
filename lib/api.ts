// @ts-nocheck
const BASE_URL = "https://dramabox.sansekai.my.id/api/dramabox";

// Fungsi pembantu Fetcher yang Kuat
async function fetchAPI(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
    Object.keys(params).forEach((key) => {
        if (params[key]) url.searchParams.append(key, params[key]);
          });

            try {
                const res = await fetch(url.toString(), { 
                      cache: 'no-store',
                            headers: {
                                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                                            'Accept': 'application/json'
                                                  }
                                                      });
                                                          if (!res.ok) return null;
                                                              return await res.json();
                                                                } catch (error) {
                                                                    console.error(`API Error ${endpoint}:`, error);
                                                                        return null;
                                                                          }
                                                                          }

                                                                          // === 10 ENDPOINT LENGKAP ===

                                                                          export async function getHomeData() {
                                                                            const data = await fetchAPI("/vip");
                                                                              return data?.columnVoList || [];
                                                                              }

                                                                              export async function getTrending() {
                                                                                const data = await fetchAPI("/trending");
                                                                                  return Array.isArray(data) ? data : [];
                                                                                  }

                                                                                  export async function searchDrama(query) {
                                                                                    const data = await fetchAPI("/search", { keyword: query });
                                                                                      return Array.isArray(data) ? data : [];
                                                                                      }

                                                                                      export async function getDramaDetail(bookId) {
                                                                                        const data = await fetchAPI("/detail", { bookId });
                                                                                          // Handle response API yang kadang beda format
                                                                                            return data?.data || data?.book ? { book: data.book || data.data.book } : null;
                                                                                            }

                                                                                            export async function getAllEpisodes(bookId) {
                                                                                              const data = await fetchAPI("/allepisode", { bookId });
                                                                                                // Handle jika data langsung array atau dibungkus object
                                                                                                  if (Array.isArray(data)) return data;
                                                                                                    if (data?.data && Array.isArray(data.data)) return data.data;
                                                                                                      return [];
                                                                                                      }

                                                                                                      export async function getCategoryList() {
                                                                                                        const data = await fetchAPI("/category");
                                                                                                          return Array.isArray(data) ? data : [];
                                                                                                          }

                                                                                                          export async function getDramaByTag(tagName) {
                                                                                                            const data = await fetchAPI("/tag", { tagName });
                                                                                                              return Array.isArray(data) ? data : [];
                                                                                                              }

                                                                                                              export async function getShorts() {
                                                                                                                const data = await fetchAPI("/shorts");
                                                                                                                  return Array.isArray(data) ? data : [];
                                                                                                                  }

                                                                                                                  export async function getPlayUrl(chapterId) {
                                                                                                                    const data = await fetchAPI("/play", { chapterId });
                                                                                                                      return data?.url || "";
                                                                                                                      }

                                                                                                                      export async function getAppConfig() {
                                                                                                                        return await fetchAPI("/config");
                                                                                                                        }
                                                                                                                        