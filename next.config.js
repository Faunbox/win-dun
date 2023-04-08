/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return [
      //English routes
      {
        source: "/en/about",
        destination: "/en/o-nas",
        locale: false,
      },
      {
        source: "/en/gallery",
        destination: "/en/galeria",
        locale: false,
      },

      //NL routes
    ];
  },
};

module.exports = nextConfig;
