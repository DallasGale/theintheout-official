module.exports = {
  siteMetadata: {
    title: 'THE IN THE OUT',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'THE IN THE OUT - Official site for Melbourne band',
        background_color: '#F54C2E',
        theme_color: '#F54C2E',
        short_name: 'THE IN THE OUT',
        display: 'fullscreen',
        start_url: '/',
        icon: 'src/images/tito-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
