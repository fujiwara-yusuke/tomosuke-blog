import type { NextPage } from 'next';
import DiaryList from 'components/index/DiaryList';
import Aside from 'components/index/TopAside'

const Home: NextPage = () => {

  return (
    <>
      <DiaryList/>
      <Aside/>
    </>
  );
};
  
export default Home;
