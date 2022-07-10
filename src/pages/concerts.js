import { dateFormatter, getTime, sortByDate } from '../dateTimeFormatter';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const Concerts = (props) => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulConcert {
        nodes {
          date
          description
          tickets
        }
      }
    }
  `);

  const data = sortByDate(query.allContentfulConcert.nodes);

  return (
    <div className="cards">
      <GatsbySeo
        title="Gilles Grethen | Concerts"
        description={`Gilles Grethen's upcoming concerts`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      <div className="card card_concerts" slide={props.slide}>
        <div className="card_content">
          <h2 className="concerts_title">Upcoming Concerts</h2>
          {data
            ? data.map((entry, i) => {
                return (
                  <div key={i} className="concerts_content">
                    <h3 className="concerts_date">
                      {dateFormatter(entry.date)}
                    </h3>
                    <p className="concerts_description">{entry.description}</p>
                    <p className="concerts_time">{`Start time: ${getTime(
                      entry.date
                    )}`}</p>
                    {entry.tickets !== 'free' && entry.tickets !== null ? (
                      <p className="concerts_tickets">
                        Tickets and more info:{' '}
                        <a
                          href={entry.tickets}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {entry.tickets}
                        </a>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Concerts;
