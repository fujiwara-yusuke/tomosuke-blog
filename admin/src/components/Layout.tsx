import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { useCookies } from "react-cookie";

type Props = {
  children?: ReactNode;
};

const Layout:FC = ({ children }: Props) => {

  const router = useRouter();
  const [cookies] = useCookies();

  useEffect(() => {
    if(router.pathname.includes('admin') && cookies.admin == undefined){
      router.push('/');
    }
  }, [cookies])

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
