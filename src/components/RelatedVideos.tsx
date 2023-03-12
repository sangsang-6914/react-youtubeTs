import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IVideosProps } from '../type/VideoInterface';
import axios from 'axios';
import VideoCard from './VideoCard';

function RelatedVideos() {
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery<IVideosProps>(['related'], () => {
    return axios.get('/videos/related.json').then((res) => res.data);
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {videos && (
        <ul>
          {videos.items.map((video) => (
            <VideoCard video={video} key={video.id} type="related" />
          ))}
        </ul>
      )}
    </>
  );
}

export default RelatedVideos;
