import React from 'react';
import { IVideos } from '../type/VideoInterface';
import { format } from 'timeago.js';
import { useNavigate } from 'react-router-dom';

interface IVideoCardProps {
  video: IVideos;
}

function VideoCard({ video }: IVideoCardProps) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const navigate = useNavigate();
  const handleThumbnailClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li className="hover:cursor-pointer" onClick={handleThumbnailClick}>
      <img className="w-full" src={thumbnails.medium.url} />
      <p className="font-bold mb-2">{title}</p>
      <p className="text-sm opacity-80">{channelTitle}</p>
      <p className="text-sm opacity-80">{format(publishedAt, 'en')}</p>
    </li>
  );
}

export default VideoCard;
