import * as React from 'react';
import '../scss/main.scss';
import { Helmet } from 'react-helmet';

// markup
const IndexPage = () => {
  return (
    <div className="main">
      <Helmet>
        <meta lang="en" charSet="utf-8"></meta>
        <title>Gilles Grethen</title>
        <link rel="canonical" href="gillesgrethen.com" />
      </Helmet>
    </div>
  );
};

export default IndexPage;
