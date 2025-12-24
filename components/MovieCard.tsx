import Link from 'next/link';
import Image from 'next/image';
import { Drama } from '@/types';
import { PlayCircle } from 'lucide-react';

export default function MovieCard({ data }: { data: Drama }) {
  const imageUrl = data.coverWap || data.cover || '/placeholder.jpg';

    return (
        <Link href={`/drama/${data.bookId}`} className="group relative block w-full aspect-[2/3] overflow-hidden rounded-xl bg-gray-900 border border-white/5 shadow-lg">
              <div className="absolute inset-0 w-full h-full">
                      <Image
                                src={imageUrl}
                                          alt={data.bookName}
                                                    fill
                                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                                        sizes="(max-width: 768px) 33vw, 20vw"
                                                                                  unoptimized
                                                                                          />
                                                                                                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                                                                                        </div>

                                                                                                              <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                                                                                                                      <span className="bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                                                                                                                GRATIS
                                                                                                                                        </span>
                                                                                                                                              </div>

                                                                                                                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                                                                                                            <PlayCircle className="w-12 h-12 text-white drop-shadow-xl" />
                                                                                                                                                                  </div>

                                                                                                                                                                        <div className="absolute bottom-0 w-full p-3">
                                                                                                                                                                                <h3 className="text-white text-sm font-semibold leading-tight line-clamp-2">
                                                                                                                                                                                          {data.bookName}
                                                                                                                                                                                                  </h3>
                                                                                                                                                                                                          {data.playCount && (
                                                                                                                                                                                                                    <p className="text-gray-400 text-[10px] mt-1">👁 {data.playCount}</p>
                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        