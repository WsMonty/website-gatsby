require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gilles Grethen`,
    siteUrl: `https://gillesgrethen.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TK35FM6',
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u1b8ojvtj4ke`,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/favicon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-next-seo',
    'gatsby-plugin-sitemap',
  ],
};
