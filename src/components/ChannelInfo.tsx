import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface IChannelInfoProps {
  id: string | undefined;
  name: string;
}

function ChannelInfo({ id, name }: IChannelInfoProps) {
  const {
    data: url,
    error,
    isLoading,
  } = useQuery(['url'], () => {
    return axios
      .get('/videos/channel.json')
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  });
  console.log(url);
  return (
    <div className="p-4 flex items-center">
      <img src={url} className="w-10 h-10 rounded-full mr-3" />
      <p className="text-xl">{name}</p>
    </div>
  );
}

export default ChannelInfo;
