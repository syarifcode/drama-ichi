const BASE_URL = "https://dramabox.sansekai.my.id/api/dramabox";

async function fetchAPI(endpoint: string, params: Record<string, any> = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

      try {
          const res = await fetch(url.toString(), { 
                cache: 'no-store',
                      headers: { 'accept': '*/*' } 
                          });
                              if (!res.ok) return null;
                                  return await res.json();
                                    } catch (error) {
                                        console.error(`Error fetching ${endpoint}:`, error);
                                            return null;
                                              }
                                              }

                                              export async function getHomeData() {
                                                const data = await fetchAPI("/vip");
                                                  return data?.columnVoList || [];
                                                  }

                                                  export async function getTrending() {
                                                    const data = await fetchAPI("/trending");
                                                      return data || [];
                                                      }

                                                      export async function searchDrama(query: string) {
                                                        const data = await fetchAPI("/search", { query });
                                                          return data || [];
                                                          }

                                                          export async function getDramaDetail(bookId: string) {
                                                            const res = await fetchAPI("/detail", { bookId });
                                                              return res?.data;
                                                              }

                                                              export async function getAllEpisodes(bookId: string) {
                                                                const data = await fetchAPI("/allepisode", { bookId });
                                                                  return Array.isArray(data) ? data : [];
                                                                  }
                                                                  