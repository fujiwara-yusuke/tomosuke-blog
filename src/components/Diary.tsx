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
      opacity: [0, 1],
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
      <div className='info'>
        <div className='tag_list'>
          {
            tags.map((tag, index) => {
              return(
              <div key={index}>
                <span className='tag_name'>{tag}</span>
              </div>
              )
            })
          }
        </div>
        <div>2022/01/01 00:00</div>
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
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  h2{
    padding-left: 5px;
    margin: 0px;
  }
  .diary_content{
    padding: 5px;
    font-size: 13px;
  }
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tag_list{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    height: 30%;
  }
  .tag_list div {
    display: flex;
    justify-content: center;
    margin-right: 10px;
  }
  .tag_name{
    padding: 2px;
    background: #010c1f;
    color: #FFF;
    font-size: 10px;
  }
`
  
export default Diary;
