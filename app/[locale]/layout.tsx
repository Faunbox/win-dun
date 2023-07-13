import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { createTranslator, useLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { NavbarProvider } from "@/context/navbarContext";
import Nav from '@/components/Navigation/Nav'

type Props = {
  children: ReactNode;
  params: { locale: string };
};

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
    title: t("core.website"),
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale}>
        <body className="relative">
          <NavbarProvider>
            {/* <Navigation /> */}
            <Nav />
          </NavbarProvider>

          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
