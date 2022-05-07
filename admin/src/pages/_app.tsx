import 'styles/globals.css';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { CookiesProvider } from "react-cookie";
import AdminProvider from 'components/AdminContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CookiesProvider>
      <AdminProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AdminProvider>
    </CookiesProvider>
  );
}

export default MyApp;
