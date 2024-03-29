import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { dateFormatter, sortedByDateKeepAll } from '../dateTimeFormatter';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { GatsbyImage } from 'gatsby-plugin-image';

const News = () => {
  const query = useStaticQuery(graphql`
    {
      allContentfulNews {
        nodes {
          date
          title
          mediaContent
          newsText {
            newsText
          }
          link
          media {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 200
            )
          }
        }
      }
    }
  `);

  const data = sortedByDateKeepAll(query.allContentfulNews.nodes);

  return (
    <div className="cards">
      <GatsbySeo
        title="Gilles Grethen | News"
        description={`News about Gilles Grethen and his music.`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      <div className="card card_news">
        <div className="card_content_news">
          {query
            ? data.map((entry, i) => {
                return (
                  <div key={i} className="article">
                    <div className="article_text">
                      <h1>{entry.title}</h1>
                      <p>{entry.newsText.newsText}</p>
                    </div>
                    {entry.mediaContent ? (
                      <div className="article_media">
                        <iframe
                          width="560"
                          height="315"
                          className="article_youtube"
                          src={entry.mediaContent}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : null}
                    {entry.link ? (
                      <a
                        href={entry.link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="article_link"
                      >
                        {entry.link}
                      </a>
                    ) : (
                      ''
                    )}
                    {entry.media ? (
                      <GatsbyImage
                        image={entry.media.gatsbyImageData}
                        alt="Logo"
                        className="article_image"
                      />
                    ) : (
                      ''
                    )}
                    <p className="article_date">{dateFormatter(entry.date)}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
export default News;
