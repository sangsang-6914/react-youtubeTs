import React from 'react';
import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';

const YoutubeApiContext = createContext<Youtube | null>(null);

export function YoutubeApiProvider({ children }: any) {
  const client = new YoutubeClient();
  // const client = new FakeYoutubeClient();
  const youtube = new Youtube(client);
  return (
    <YoutubeApiContext.Provider value={youtube}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  const youtube = useContext(YoutubeApiContext);
  if (!youtube) throw new Error('Cannot find YoutubeApiProvider!');
  return youtube;
}
