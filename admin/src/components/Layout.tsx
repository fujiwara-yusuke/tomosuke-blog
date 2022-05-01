import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>admin</title>
      </Head>
      <div className='content'>{children}</div>
    </>
  );
};

export default Layout;
