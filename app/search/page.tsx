"use client";

import { useState } from 'react';
import { searchDrama } from '@/lib/api';
import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';
import { Drama } from '@/types';
import { Search, Loader2 } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
    const [results, setResults] = useState<Drama[]>([]);
      const [loading, setLoading] = useState(false);

        const handleSearch = async (e: React.FormEvent) => {
            e.preventDefault();
                if (!query.trim()) return;
                    setLoading(true);
                        try {
                              const data = await searchDrama(query);
                                    setResults(data);
                                        } catch (err) { console.error(err); } 
                                            finally { setLoading(false); }
                                              };

                                                return (
                                                    <div className="min-h-screen bg-[#050505] text-gray-100">
                                                          <Navbar />
                                                                <div className="pt-24 px-4 max-w-7xl mx-auto">
                                                                        <form onSubmit={handleSearch} className="mb-12 max-w-2xl mx-auto relative flex items-center bg-[#1a1a1a] rounded-full p-2 border border-white/10">
                                                                                  <input
                                                                                              type="text"
                                                                                                          value={query}
                                                                                                                      onChange={(e) => setQuery(e.target.value)}
                                                                                                                                  placeholder="Cari judul drama..."
                                                                                                                                              className="flex-1 bg-transparent px-4 py-2 text-white focus:outline-none"
                                                                                                                                                        />
                                                                                                                                                                  <button type="submit" className="p-3 bg-purple-600 rounded-full hover:bg-purple-700">
                                                                                                                                                                              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                                                                                                                                                                                        </button>
                                                                                                                                                                                                </form>

                                                                                                                                                                                                        {results.length > 0 && (
                                                                                                                                                                                                                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                                                                                                                                                                                                              {results.map((drama) => <MovieCard key={drama.bookId} data={drama} />)}
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                            