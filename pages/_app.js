import GlobalStyle from "../styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <GlobalStyle />
          <Head>
            <title>propOS</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeContext.Provider>
      </SWRConfig>
    </>
  );
}
