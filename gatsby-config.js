module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    siteTitle: `Muhammad Zulhilmi`,
    siteTitleAlt: `Muhammad Zulhilmi`,
    siteHeadline: `Muhammad Zulhilmi`,
    siteUrl: `https://mzulhilmi.github.io`,
    siteDescription: `My personal landing page`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@mzulhilmi`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-72214155-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sections",
        path: "./src/sections",
      },
      __key: "sections",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
  ].filter(Boolean),
};
