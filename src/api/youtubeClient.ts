import axios from 'axios';

export interface IParams {
  params: {
    part: string;
    maxResults?: number;
    q?: string;
    relatedToVideoId?: string;
    chart?: string;
    id?: string;
    type?: string;
  };
}

export default class YoutubeClient {
  private httpClient: any;
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_API_KEY },
    });
  }

  search(params: IParams) {
    return this.httpClient.get('/search', params);
  }

  popular(params: IParams) {
    return this.httpClient.get('/videos', params);
  }

  channels(params: IParams) {
    return this.httpClient.get('/channels', params);
  }
}
