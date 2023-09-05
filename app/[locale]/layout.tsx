import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "keen-slider/keen-slider.min.css";

import { Providers } from "./providers";
import { createTranslator, useLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { FormProvider } from "@/context/formContext";
import Nav from "@/components/Navigation/Nav";
import Footer from "@/components/Footer/Footer";
import CallCloud from "@/components/Navigation/CallCloud";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const CookieConsent = dynamic(() => import("@/components/Navigation/Cookie"), {
  ssr: false,
});

async function getMessages(locale: string) {
  try {
    return (await import(`../../locale/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: `${t("core.website")} | Wit-dun Express `,
    authors: { name: "Filip Sojecki", url: "https://succes-web.pl" },
    keywords: [t("core.keywords")],
    alternates: {
      canonical: "https://wit-dun.eu",
      languages: {
        en: "https://wit-dun.eu/en",
        nl: "https://wit-dun.eu/nl",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../locale/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.className} bg-white scroll-smooth`}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-C883Y1DZDC" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-C883Y1DZDC');
        `}
      </Script>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className="relative bg-white">
          <CookieConsent />
          <Providers>
            <FormProvider>
              <Nav />
              {children}
            </FormProvider>
            <Footer />
          </Providers>
          <CallCloud />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
