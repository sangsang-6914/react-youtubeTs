import React from 'react';
import { IVideos } from '../type/VideoInterface';
import { format } from 'timeago.js';
import { useNavigate } from 'react-router-dom';

interface IVideoCardProps {
  video: IVideos;
  type?: string;
}

function VideoCard({ video, type }: IVideoCardProps) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const isRelated = type === 'related';
  const navigate = useNavigate();
  const handleThumbnailClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li
      className={
        isRelated
          ? 'w-full gap-1 m-2 flex hover:cursor-pointer'
          : 'hover:cursor-pointer'
      }
      onClick={handleThumbnailClick}
    >
      <img
        className={isRelated ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt=""
      />
      <div>
        <p className="font-bold mb-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{format(publishedAt, 'en')}</p>
      </div>
    </li>
  );
}

export default VideoCard;
