import { useQuery } from '@tanstack/react-query';
import { IVideos } from '../type/VideoInterface';
import VideoCard from './VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

interface IRelatedProps {
  id: string | undefined;
}

function RelatedVideos({ id }: IRelatedProps) {
  const youtube = useYoutubeApi();
  const { data: videos, isLoading } = useQuery<IVideos[]>(
    ['related'],
    () => {
      return youtube.related(id);
    },
    {
      staleTime: 5 * 60 * 1000,
    }
  );
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} type="related" />
          ))}
        </ul>
      )}
    </>
  );
}

export default RelatedVideos;
