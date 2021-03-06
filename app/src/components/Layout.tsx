import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';
import TopHeader from 'components/TopHeader'

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>MyTemplate</title>
      </Head>
      <TopHeader/>
      <Main>
        {children}
      </Main>
      <footer className=''></footer>
    </>
  );
};

const Main = styled.div`
display: flex;
padding: 0px 45px;
`

export default Layout;
