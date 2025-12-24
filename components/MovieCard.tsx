import Link from 'next/link';
import Image from 'next/image';
import { Drama } from '@/types';
import { PlayCircle } from 'lucide-react';

export default function MovieCard({ data }: { data: Drama }) {
  const imageUrl = data.coverWap || data.cover || '/placeholder.jpg';

    return (
        <Link href={`/drama/${data.bookId}`} className="group relative block w-full aspect-[2/3] overflow-hidden rounded-xl bg-[#1a1a1a] ring-1 ring-white/5 transition-all duration-300 hover:ring-purple-500/50 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-1">
              {/* Image with zoom effect */}
                    <Image
                            src={imageUrl}
                                    alt={data.bookName}
                                            fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                                            sizes="(max-width: 768px) 33vw, 20vw"
                                                                    unoptimized
                                                                          />
                                                                                
                                                                                      {/* Dark Overlay Gradient */}
                                                                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                                                                                  
                                                                                                        {/* Badge */}
                                                                                                              <div className="absolute top-2 right-2 z-10">
                                                                                                                      <span className="bg-purple-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                                                                                                                FREE
                                                                                                                                        </span>
                                                                                                                                              </div>

                                                                                                                                                    {/* Play Icon (appears on hover) */}
                                                                                                                                                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                                                                                                                  <PlayCircle className="w-12 h-12 text-white drop-shadow-lg scale-75 group-hover:scale-100 transition-transform" fill="rgba(147, 51, 234, 0.5)" />
                                                                                                                                                                        </div>

                                                                                                                                                                              {/* Title */}
                                                                                                                                                                                    <div className="absolute bottom-0 w-full p-3 z-20">
                                                                                                                                                                                            <h3 className="text-white text-xs md:text-sm font-semibold leading-tight line-clamp-2 drop-shadow-md group-hover:text-purple-300 transition-colors">
                                                                                                                                                                                                      {data.bookName}
                                                                                                                                                                                                              </h3>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                        </Link>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                          