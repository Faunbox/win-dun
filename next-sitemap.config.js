/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:  "https://www.wit-dun.eu",
  generateRobotsTxt: true,
  exclude: ['/regulamin', '/polityka-prywatnosci', '/en/terms', '/en/privacy'],
  alternateRefs: [
    {
      href: 'https://www.wit-dun.eu/en',
      hreflang: 'en',
    },
    {
      href: 'www.wit-dun.eu/nl',
      hreflang: 'nl',
    },
  ],
};
