import 'styles/globals.css';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { CookiesProvider } from "react-cookie";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  );
}

export default MyApp;
