import { appWithTranslation } from "next-i18next";
import { createTheme, NextUIProvider, useSSR } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "../layout/Layout";
import "../styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR();
  const lightTheme = createTheme({
    type: "light",
    theme: {
      fonts: {},
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
        // background: "#879b35",
      },
    },
  });

  return (
    isBrowser && (
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    )
  );
}

export default appWithTranslation(MyApp);
