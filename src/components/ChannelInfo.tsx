import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

interface IChannelInfoProps {
  id: string | undefined | null | any;
  name: string;
}

function ChannelInfo({ id, name }: IChannelInfoProps) {
  const youtube = useYoutubeApi();
  const { data: url } = useQuery(
    ['url'],
    () => {
      return youtube.channelImageURL(id);
    },
    {
      staleTime: 60 * 60 * 1000,
    }
  );
  return (
    <div className="p-4 flex items-center">
      <img src={url} className="w-10 h-10 rounded-full mr-3" alt="" />
      <p className="text-xl">{name}</p>
    </div>
  );
}

export default ChannelInfo;
