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
      {
        source: "/en/reservation",
        destination: "/en/rezerwacja",
        locale: false,
      },
      {
        source: "/en/contact",
        destination: "/en/kontakt",
        locale: false,
      },
      {
        source: "/en/before-travel/how-to-reserve",
        destination: "/en/przed-podroza/jak-rezerwowac-przejazd",
        locale: false,
      },
      {
        source: "/en/before-travel/faq",
        destination: "/en/przed-podroza/faq",
        locale: false,
      },
      {
        source: "/en/before-travel/luggage",
        destination: "/en/przed-podroza/bagaz",
        locale: false,
      },
      {
        source: "/en/terms",
        destination: "/en/regulamin",
        locale: false,
      },

      //NL routes
      {
        source: "/nl/about",
        destination: "/nl/o-nas",
        locale: false,
      },
      {
        source: "/nl/gallery",
        destination: "/nl/galeria",
        locale: false,
      },
      {
        source: "/nl/reservation",
        destination: "/nl/rezerwacja",
        locale: false,
      },
      {
        source: "/nl/contact",
        destination: "/nl/kontakt",
        locale: false,
      },
      {
        source: "/nl/before-travel-nl/how-to-reserve",
        destination: "/nl/przed-podroza/jak-rezerowac-przejazd",
        locale: false,
      },
      {
        source: "/nl/before-travel-nl/faq",
        destination: "/nl/przed-podroza/faq",
        locale: false,
      },
      {
        source: "/nl/before-travel-nl/luggage",
        destination: "/nl/przed-podroza/bagaz",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
