import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { dateFormatter } from '../dateTimeFormatter';

const News = () => {
  const query = useStaticQuery(graphql`
    {
      allContentfulNews {
        edges {
          node {
            title
            newsText {
              newsText
            }
            date
            mediaContent
          }
        }
      }
    }
  `);

  const data = query.allContentfulNews.edges;

  return (
    <div className="cards">
      <div className="card card_news">
        <div className="card_content_news">
          {query
            ? data.map((entry, i) => {
                return (
                  <div key={i} className="article">
                    <div className="article_text">
                      <h1>{entry.node.title}</h1>
                      <p>{entry.node.newsText.newsText}</p>
                    </div>
                    {entry.node.mediaContent ? (
                      <div className="article_media">
                        <iframe
                          width="560"
                          height="315"
                          className="article_youtube"
                          src={entry.node.mediaContent}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : null}
                    <p className="article_date">
                      {dateFormatter(entry.node.date)}
                    </p>
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
