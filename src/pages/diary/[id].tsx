import { motion } from "framer-motion";
import styled from 'styled-components';

const Diary = () => {

  const animationSetting = {
    opacity: [0, 0, 1],
    x:[-50, 0],
    transition: {
      duration: 1
    }
  }

  return(
    <CustomDiary animate={animationSetting}>
      testtesttesettesttesttesttest
    </CustomDiary>
  )
}

const CustomDiary = styled(motion.div)`
  width: 70%;
  opacity: 0;
  min-height: 635px;
  background: #FFFFFF;
  border-radius: 5px;
  color: black;
`

export default Diary;