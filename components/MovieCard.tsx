"use client";
import Link from 'next/link';
import Image from 'next/image';

// @ts-ignore
export default function MovieCard({ data }) {
  // Fallback gambar jika kosong
    const imageUrl = data.coverWap || data.cover || 'https://placehold.co/400x600/1a1a1a/FFF?text=No+Image';

      return (
          <Link href={`/drama/${data.bookId}`} className="group relative block w-full aspect-[2/3] overflow-hidden rounded-xl bg-[#1a1a1a] transition-all hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-purple-900/50">
                <Image
                        src={imageUrl}
                                alt={data.bookName || "Drama"}
                                        fill
                                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                        unoptimized
                                                              />
                                                                    
                                                                          {/* Overlay Gelap di Bawah */}
                                                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                                                                      {/* Judul */}
                                                                                            <div className="absolute bottom-0 w-full p-3">
                                                                                                    <h3 className="text-white text-xs md:text-sm font-bold line-clamp-2 drop-shadow-md">
                                                                                                              {data.bookName}
                                                                                                                      </h3>
                                                                                                                              {data.rankVo && (
                                                                                                                                        <span className="text-[10px] text-yellow-400 font-bold">🔥 Top {data.rankVo.sort}</span>
                                                                                                                                                )}
                                                                                                                                                      </div>
                                                                                                                                                          </Link>
                                                                                                                                                            );
                                                                                                                                                            }
                                                                                                                                                            