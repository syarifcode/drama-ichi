// @ts-nocheck
export interface Drama {
  bookId: string;
    bookName: string;
      coverWap?: string;
        cover?: string;
          introduction?: string;
            playCount?: string;
              tags?: string[];
                category?: string;
                  rankVo?: {
                      hotCode: string;
                          sort: number;
                            };
                            }

                            // INI YANG TADI HILANG (MAAFKAN SAYA)
                            export interface Column {
                              columnId: number;
                                title: string;
                                  bookList: Drama[];
                                  }

                                  export interface DramaDetail {
                                    book: {
                                        bookId: string;
                                            bookName: string;
                                                cover: string;
                                                    introduction: string;
                                                        tags: string[];
                                                            category?: string;
                                                                year?: string;
                                                                    area?: string;
                                                                      };
                                                                      }

                                                                      export interface Episode {
                                                                        chapterId: string;
                                                                          chapterName: string;
                                                                            chapterIndex: number;
                                                                              chapterImg: string;
                                                                                cdnList: any[];
                                                                                }

                                                                                export interface Category {
                                                                                  id: number;
                                                                                    name: string;
                                                                                      cover: string;
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
                                                                                                