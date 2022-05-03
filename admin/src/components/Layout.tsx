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
    if(router.pathname.includes('admin') && !cookies.admin){
      router.push('/');
    }
  }, [cookies])

  const displayAdmin = () => {
    if(router.route == '/'){
      return <div className='content'>{children}</div>
    }else{
      return cookies.admin != undefined ? <div className='content'>{children}</div> : null
    }
  }

  return (
    <>
      <Head>
        <title>admin</title>
      </Head>
      {displayAdmin()}
    </>
  );
};

export default Layout;
