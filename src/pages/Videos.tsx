import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { IVideos } from '../type/VideoInterface';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

function Videos() {
  const { keyword } = useParams();
  const youtube = useYoutubeApi();
  const {
    data: videos,
    error,
    isLoading,
  } = useQuery<IVideos[]>(
    ['videos', keyword],
    () => {
      return youtube.search(keyword);
    },
    {
      staleTime: 5 * 60 * 1000,
    }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error..</p>}
      <ul className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {videos &&
          videos.map((video: any) => (
            <VideoCard key={video.id} video={video} />
          ))}
      </ul>
    </>
  );
}

export default Videos;
