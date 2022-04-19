import Link from 'next/link';
import styled from 'styled-components';
import Modal from 'components/Modal';
import { useState } from 'react';
import Tags from './Tags';
import Ranking from './Ranking';
import Other from './Other';

module ModalList {
  export const Tags = 0;
  export const Rnaking = 1;
  export const Other= 2;
}

const TopHeader = () => {

  const menuList:string[] = ["Tags", "Ranking", "other"];
  const [isDisplayModal, setIsDisplyaModal] = useState<boolean>(false);
  const [selectedModalMenu, setSelectedModalMenu] = useState<number>(0);
  const showModal = (index: number) => {
    if(isDisplayModal){
      setIsDisplyaModal(false);
    }else{
      setIsDisplyaModal(true);
    }
    setSelectedModalMenu(index);
  }

  return(
    <>
      <Modal
        showModal={isDisplayModal}
        clickClose={() => setIsDisplyaModal(false)}
      >
        { ModalList.Tags == selectedModalMenu? <Tags closeModal={() => setIsDisplyaModal(false)}/>: null }
        { ModalList.Rnaking == selectedModalMenu? <Ranking closeModal={() => setIsDisplyaModal(false)}/>: null }
        { ModalList.Other == selectedModalMenu? <Other closeModal={() => setIsDisplyaModal(false)}/>: null }
      </Modal>
      <TitleWrapper className=''>
        <Title>
          <Link href='/'>
            <a>
              <h1>Yusuke-Diary</h1>
            </a>
          </Link>
          <div className='menu_list'>
            {
              menuList.map((memu, index) => {
                return(
                  <div className='menu' key={index} defaultValue={index} onClick={() => showModal(index)}>{memu}</div>
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
  background: #f7f7f7;
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