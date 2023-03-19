import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "../layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
  );
}

export default MyApp;
