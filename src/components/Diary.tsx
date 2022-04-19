import Link from 'next/link';
import styled from 'styled-components';
import { motion, AnimationControls } from "framer-motion";
import { useEffect } from 'react';

interface Props {
  title: string,
  content: string
  animation: AnimationControls
  custom: number
}

const Diary = ({
  title,
  content,
  animation,
  custom
}: Props) => {

  useEffect(() => {
    animation.start(custom => ({
      opacity: [0, 0, 1],
      x:[-50, 0],
      transition: {
        duration: 0.8 + custom * 0.1
      }
    }))
  },[])
  
  const tags = ["TagTagTagTag", "TagTagTagTag", "TagTagTagTag", "TagTagTagTag"];

  return (
    <CustomDiary animate={animation} custom={custom}>
      <div>
        <Link href='/diary/1'>
          <a>
            <h2 className='diary_title'>{title}</h2>
            <div className='diary_content'>{content}</div>
          </a>
        </Link>
      </div>
      <div className='tag_list'>
        {
          tags.map(tag => {
            return(
            <div>
              <span className='tag_name'>{tag}</span>
            </div>
            )
          })
        }
      </div>
    </CustomDiary>
  );
};

const CustomDiary = styled(motion.div)`
  width: 95%;
  color: black;
  background: #f7f7f7;
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;
  height: 110px;
  opacity: 0;
  padding: 15px 15px 15px 40px;
  display: flex;
  justify-content: space-between;
  h2{
    margin: 15px;
  }
  .tag_list{
    display: flex;
    flex-wrap: wrap;
  }
  .tag_list div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tag_name{
    padding: 5px;
    background: #010c1f;
    color: #FFF;
    font-size: 10px;
  }
`
  
export default Diary;
