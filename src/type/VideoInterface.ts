interface IVideosProps {
  items: IVideos[];
}

interface IVideos {
  id: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    title: string;
    thumbnails: IThumbnails;
  };
}

interface IThumbnails {
  default: IThumbnailInfo;
  high: IThumbnailInfo;
  medium: IThumbnailInfo;
}

interface IThumbnailInfo {
  height: number;
  url: string;
  width: number;
}

export type { IVideosProps, IVideos, IThumbnailInfo, IThumbnails };
