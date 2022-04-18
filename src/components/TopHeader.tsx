import Link from 'next/link';
import styled from 'styled-components';
import Modal from './Modal';
import { useState } from 'react';

const TopHeader = () => {

  const menuList:string[] = ["Tags", "Ranking", "other"];
  const [isDisplayModal, setIsDisplyaModal] = useState<boolean>(false);

  const showModal = () => {
    if(isDisplayModal){
      setIsDisplyaModal(false);
    }else{
      setIsDisplyaModal(true);
    }
  }

  return(
    <>
      <Modal
        isDisplayModal={isDisplayModal}
        setIsDisplyaModal={setIsDisplyaModal}
      />
      <TitleWrapper className=''>
        <Title>
          <Link href='/'>
            <a>
              <h1>Tomosuke-Diary</h1>
            </a>
          </Link>
          <div className='menu_list'>
            {
              menuList.map(memu => {
                return(
                  <div className='menu' onClick={showModal}>{memu}</div>
                )
              })
            }
          </div>
        </Title>
      </TitleWrapper>
    </>
  )
}

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
  display: flex;
  justify-content: space-between;

  a{
    color: black;
  }
  .menu_list{
    display: flex;
    align-items: flex-end;
    padding: 15px 20px;
  }
  .menu{
    color: black;
    margin-right: 10px;
    cursor: pointer;
  }
`

export default TopHeader;