import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IVideosProps } from '../type/VideoInterface';
import VideoCard from '../components/VideoCard';

function Videos() {
  const { keyword } = useParams();
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery<IVideosProps>(['videos', keyword], () => {
    return axios.get('/videos/popular.json').then((res) => res.data);
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error..</p>}
      <ul className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {videos &&
          videos.items.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
      </ul>
    </>
  );
}

export default Videos;
