import * as React from 'react';
import '../scss/main.scss';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

// markup
const IndexPage = () => {
  return (
    <div className="main">
      <GatsbySeo
        title="Gilles Grethen"
        description={`Gilles Grethen's website about his music and projects.`}
        language="en"
        noindex={false}
        nofollow={false}
      />
    </div>
  );
};

export default IndexPage;
