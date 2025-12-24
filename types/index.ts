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
                                                                          