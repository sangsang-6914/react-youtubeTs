import axios from 'axios';
import { IParams } from './youtubeClient';

export default class FakeYoutubeClient {
  async search(params: IParams) {
    return axios.get(`/videos/${params.params.q ? 'search' : 'related'}.json`);
  }

  async popular() {
    return axios.get(`/videos/popular.json`);
  }

  async channels() {
    return axios.get(`/videos/channel.json`);
  }
}
