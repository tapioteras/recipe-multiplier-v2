import "../styles/index.scss";
import type { AppProps } from "next/app";
import { LoginContextProvider } from "../context/loginContext";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginContextProvider>
  );
}

export default MyApp;
