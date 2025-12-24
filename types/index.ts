export interface Drama {
      bookId: string;
        bookName: string;
          coverWap?: string;
            cover?: string;
              introduction?: string;
                playCount?: string;
                  tags?: string[];
                    rankVo?: {
                        hotCode: string;
                            sort: number;
                              };
                              }

                              export interface Column {
                                columnId: number;
                                  title: string;
                                    bookList: Drama[];
                                    }

                                    export interface VideoSource {
                                      quality: number;
                                        videoPath: string;
                                          isVipEquity: number;
                                          }

                                          export interface CdnData {
                                            cdnDomain: string;
                                              videoPathList: VideoSource[];
                                              }

                                              export interface Episode {
                                                chapterId: string;
                                                  chapterName: string;
                                                    chapterIndex: number;
                                                      chapterImg: string;
                                                        cdnList: CdnData[];
                                                        }

                                                        export interface DramaDetail {
                                                          book: {
                                                              bookId: string;
                                                                  bookName: string;
                                                                      cover: string;
                                                                          introduction: string;
                                                                              tags: string[];
                                                                                };
                                                                                }
                                                                                
}