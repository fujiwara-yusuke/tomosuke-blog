import { ReactNode } from 'react';
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Props {
  showModal: boolean,
  clickClose: (showModal: boolean) => void,
  children: ReactNode
}

const Modal = ({
  showModal,
  clickClose,
  children
}:Props) => {

  const modalAnimation = useAnimation();
  const overlayAnimation = useAnimation();

  useEffect(() => {
    if(showModal){
      modalAnimation.start({
        display: "initial",
        x: [-500, 0],
        transition:{
          duration: 1
        },
      })

      overlayAnimation.start({
        display: "initial",
        opacity: [0, 0.8],
        transition:{
          duration: 1
        },
      })
    }else{
      modalAnimation.start({
        x: [0,  -500],
        transition:{
          duration: 1
        },
        transitionEnd: { display: "none" }
      })

      overlayAnimation.start({
        opacity: [0.8, 0],
        transition:{
          duration: 1
        },
        transitionEnd: { display: "none" }
      })
    }
  },[showModal])
  
  const closeModal = () => {
    clickClose(false);
  }

  return(
    <>
      <ModalOveray
        animate={overlayAnimation}
        onClick={closeModal}
      />
      <CustomModal animate={modalAnimation}>
        {children}
      </CustomModal>
    </>
  )
}

const ModalOveray = styled(motion.div)`
  display: none;
  z-index: 10;
  position: fixed;
  background: black;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  overflow-y: auto;
  `
  
  const CustomModal = styled(motion.div)`
  z-index: 100;
  display: none;
  position: fixed;
  background: #010c1f;
  width: 30%;
  height: 100%;
`

export default Modal;