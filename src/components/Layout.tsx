import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>MyTemplate</title>
      </Head>
      <TitleWrapper className=''>
        <Title>
          <Link href='/'>
            <a>
              <h1>Home</h1>
            </a>
          </Link>
        </Title>
      </TitleWrapper>
      <Main>
        {children}
        <CustomAside>
          <div className='aside_wrapper'>
            <div className='profile'>test</div>
            <div className='tags'>test</div>
          </div>
        </CustomAside>
      </Main>
      <footer className=''></footer>
    </>
  );
};

const TitleWrapper = styled.header`
  padding: 10px 45px;
  h1{
    margin: 0px;
    padding: 15px 20px;
    font-size: 60px;
  }
`

const Title = styled.div`
  background: #FFF;
  border-radius: 10px;
  height: 100px;

  a{
    color: black;
  }
`

const Main = styled.div`
display: flex;
padding: 0px 45px;
`

const CustomAside = styled.aside`
  width: 30%;
  padding-left: 10px;
  .aside_wrapper {
    height: 100%;
    background: #FFFFFF;
    color: black;
    border-radius: 5px;
  }
`

export default Layout;
