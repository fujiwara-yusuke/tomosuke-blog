import type { NextPage } from 'next';
import DiaryList from 'components/DiaryList';
import Aside from 'components/Aside'

const Home: NextPage = () => {

  return (
    <>
      <DiaryList/>
      <Aside/>
    </>
  );
};
  
export default Home;
