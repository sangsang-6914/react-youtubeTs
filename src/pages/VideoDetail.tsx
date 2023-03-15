import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

function VideoDetail() {
  const { id } = useParams();
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, description, channelId } = video.snippet;

  return (
    <div className="flex flex-col lg:flex-row">
      <section className="basis-4/6">
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${id}?enablejsapi=1&origin=http://example.com`}
          frameBorder="0"
          title={id}
        ></iframe>
        <div className="p-5">
          <p className="text-2xl font-bold">{title}</p>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </section>
      <div className="basis-2/6">
        <RelatedVideos id={id} />
      </div>
    </div>
  );
}

export default VideoDetail;
