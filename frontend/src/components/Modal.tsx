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

  const variants = {
    hidden: { display: 'none' },
    openOverlay: {
      display: "initial",
      opacity: [0, 0.8],
      transition:{ duration: 1 }
    },
    openModal: {
      display: "initial",
      x: [-500, 0],
      transition:{ duration: 1 },
    },
    closeOverlay:{
      opacity: [0.8, 0],
      transition:{ duration: 1 },
      transitionEnd: { display: "none" }
    },
    closeModal:{
      x: [0,  -500],
      transition:{ duration: 1 },
      transitionEnd: { display: "none" }
    }
  }

  useEffect(() => {
    if(showModal){
      modalAnimation.start('openModal');
      overlayAnimation.start('openOverlay');
      document.body.style.overflow = 'hidden';
    }else{
      modalAnimation.start('closeModal');
      overlayAnimation.start('closeOverlay');
      document.body.style.overflow = '';
    }
  },[showModal])
  
  const closeModal = () => {
    clickClose(false);
  }

  return(
    <>
      <ModalOveray
        variants={variants}
        animate={overlayAnimation}
        onClick={closeModal}
      />
      <CustomModal 
        variants={variants}
        animate={modalAnimation}
      >
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