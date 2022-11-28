import "../styles/index.scss";
import type { AppProps } from "next/app";
import { LoginContextProvider } from "../context/loginContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginContextProvider>
      <Component {...pageProps} />
    </LoginContextProvider>
  );
}

export default MyApp;
