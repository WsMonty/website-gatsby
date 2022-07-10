import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const Media = (props) => {
  return (
    <div className="cards">
      <GatsbySeo
        title="Gilles Grethen | Media"
        description={`Listen to Gilles Grethen's music and watch videos.`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      <div className="card card_media">
        <div className="card_content">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wLMuRnlkdIQ"
            title="YouTube video player"
            className="youtube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/1q7hq6f4FwFJFzzR7RkBXB?utm_source=generator"
            width="100%"
            height="380"
            title="Spotify Player"
            className="spotify"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Media;
