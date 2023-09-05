const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.js"
);

module.exports = withNextIntl({
  async rewrites() {
    return {

      //EN routes
      beforeFiles: [
        {
          source: "/en/before-travel",
          destination: "/en/przed-podroza",
          locale: false,
        },
        {
          source: "/en/terms",
          destination: "/en/regulamin",
          locale: false,
        },
        {
          source: "/en/contact",
          destination: "/en/kontakt",
          locale: false,
        },
        {
          source: "/en/reservation",
          destination: "/en/rezerwacja",
          locale: false,
        },
        {
          source: "/en/before-travel",
          destination: "/before-travel",
          locale: false,
        },
        {
          source: "/en/terms",
          destination: "/en/terms",
          locale: false,
        },
        {
          source: "/en/privacy",
          destination: "/en/polityka-prywatnosci",
          locale: false,
        },
        {
          source: "/en/contact",
          destination: "/contact",
          locale: false,
        },
        {
          source: "/en/reservation",
          destination: "/reservation",
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
      ],
    };
  },
});
