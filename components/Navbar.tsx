import Link from 'next/link';
import { Search, MonitorPlay } from 'lucide-react';

export default function Navbar() {
  return (
      <nav className="fixed top-0 w-full z-50 glass-nav h-16 flex items-center justify-between px-4 lg:px-8">
            <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                              <MonitorPlay className="text-white w-5 h-5" />
                                      </div>
                                              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                                        Drama<span className="text-purple-500">Ichi</span>
                                                                </span>
                                                                      </Link>

                                                                            <Link 
                                                                                    href="/search" 
                                                                                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors border border-white/5"
                                                                                                  >
                                                                                                          <Search className="w-4 h-4 text-gray-400" />
                                                                                                                  <span className="text-sm text-gray-400 hidden sm:block">Cari Drama...</span>
                                                                                                                        </Link>
                                                                                                                            </nav>
                                                                                                                              );
                                                                                                                              }
                                                                                                                              