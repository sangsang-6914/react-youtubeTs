import FakeYoutubeClient from './fakeYoutubeClient';
import YoutubeClient from './youtubeClient';

export default class Youtube {
  private apiClient: YoutubeClient | FakeYoutubeClient;

  constructor(apiClient: YoutubeClient | FakeYoutubeClient) {
    this.apiClient = apiClient;
  }

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword(keyword) : this.popularVideos();
  }

  async searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res: any) =>
        res.data.items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  async popularVideos() {
    return this.apiClient
      .popular({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res: any) => res.data.items);
  }

  async channelImageURL(id: string | undefined) {
    return this.apiClient
      .channels({
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res: any) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async related(id: string | undefined) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          relatedToVideoId: id,
          type: 'video',
          maxResults: 25,
        },
      })
      .then((res: any) =>
        res.data.items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }
}
