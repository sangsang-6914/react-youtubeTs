import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import { IVideos } from '../type/VideoInterface';

function VideoDetail() {
  const { id } = useParams();
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, description } = video.snippet;

  return (
    <div className="flex flex-col lg:flex-row">
      <section className="basis-4/6">
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${id}?enablejsapi=1&origin=http://example.com`}
          frameBorder="0"
        ></iframe>
        <div className="p-5">
          <p className="text-2xl font-bold">{title}</p>
          <ChannelInfo id={id} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </section>
      <div className="basis-2/6">
        <RelatedVideos />
      </div>
    </div>
  );
}

export default VideoDetail;
