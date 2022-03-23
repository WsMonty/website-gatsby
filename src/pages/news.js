import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const News = (props) => {
  const query = useStaticQuery(graphql`
    {
      allContentfulNews {
        nodes {
          title
          date
          newsText {
            newsText
          }
          media {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const data = query.allContentfulNews.nodes;

  return (
    <div className="cards">
      <div className="card card_news">
        <div className="card_content">
          {query
            ? data.map((entry, i) => {
                return (
                  <div key={i} className="article">
                    <img
                      className="article_img"
                      src={entry.media.file.url}
                      alt={entry.media.title}
                    />
                    <div className="article_text">
                      <h1>{entry.title}</h1>
                      <p>{entry.newsText.newsText}</p>
                    </div>
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
