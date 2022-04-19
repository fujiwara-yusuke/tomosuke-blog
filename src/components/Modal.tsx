import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";

interface Props {
  isDisplayModal: boolean,
  setIsDisplyaModal: (isDisplayModal: boolean) => void
}

const Modal = ({
  isDisplayModal,
  setIsDisplyaModal
}:Props) => {

  const modalAnimation = useAnimation();
  const overlayAnimation = useAnimation();

  useEffect(() => {
    if(isDisplayModal){
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
  },[isDisplayModal])
  
  const closeModal = () => {
    setIsDisplyaModal(false);
  }

  return(
    <>
      <ModalOveray
        animate={overlayAnimation}
        onClick={closeModal}
      />
      <CustomModal animate={modalAnimation}>
        <div className="modal_head">
          <div className="title">modal</div>
          <CloseIcon onClick={closeModal}/>
        </div>
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
  .modal_head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
  }
  .title{

  }
`

export default Modal;