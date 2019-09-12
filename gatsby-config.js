module.exports = {
  siteMetadata: {
    title: `KuberOptic`,
    description: `A Kubernetes and deployment and visualization tool.`,
    author: `@JacobBanks`,
    siteUrl: `https://gatsby-starter-landing-page.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        path: `${__dirname}/src/images/headshots`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `headshots`,
        path: `${__dirname}/src/images/headshots`,
      },
    },
  ],
};
