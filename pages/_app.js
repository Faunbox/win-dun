import { appWithTranslation } from "next-i18next";
import { createTheme, NextUIProvider, useSSR } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FormProvider } from "../context/formContext";
import Layout from "../layout/Layout";
import "../styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR();
  const lightTheme = createTheme({
    type: "light",
    theme: {
      fonts: {
        
      },
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
        // background: "#879b35",
      },
      fontFamily: "Outfit",
    },
  });

  return (
    isBrowser && (
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <FormProvider>
          <NextUIProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NextUIProvider>
        </FormProvider>
      </NextThemesProvider>
    )
  );
}

export default appWithTranslation(MyApp);
