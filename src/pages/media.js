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
            title="Spotify Player State of Mind"
            style={{ borderRadius: '12px' }}
            className="card_media_spotify"
            src="https://open.spotify.com/embed/album/19xZqiZQPjbpNcevvPE0BC?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wLMuRnlkdIQ"
            title="YouTube video player"
            className="card_media_youtube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="card_media_spotify"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/1q7hq6f4FwFJFzzR7RkBXB?utm_source=generator"
            width="100%"
            height="380"
            title="Spotify Player Time Suite"
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
