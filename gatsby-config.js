module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "graphcms-estudio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-eu-central-1.graphcms.com/v2/ckvvalglq1m2t01wdfe4a56f8/master",
      },
    }
  ],
};