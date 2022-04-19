import { useState, useMemo } from 'react';
import { useAnimation } from "framer-motion";
import styled from 'styled-components';
import Diary from 'components/Diary';
import Pagination from '@mui/material/Pagination';

const DiaryList = ({}) => {

  const animation = useAnimation();

  // const testList = Array(25).fill({title: "test", content: "testtesttesettesttesttesttest"});
  const testList: {title: string, content: string}[] = [
      {title: "test", content: "testtesttesettesttesttesttest"},
      {title: "tティest", content: "testtesttesettesttesttesttest"},
      {title: "test", content: "testtesttesettesttesttesttest"},
      {title: "test", content: "testtesttesettesttesttesttest"},
      {title: "ティシs", content: "testtesttesettesttesttesttest"},
      {title: "test", content: "testtesttesettesttesttesttest"},
      {title: "ティシs", content: "testtesttesettesttesttesttest"},
      {title: "ティシs", content: "testtesttesettesttesttesttest"},
      {title: "ティシs", content: "testtesttesettesttesttesttest"},
      {title: "ティシs", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"},
      {title: "asadf", content: "testtesttesettesttesttesttest"}
    ]

  const MAXPAGINATION = useMemo(() => {
    return Math.ceil(testList.length / 5);
  }, []);

  const [diaryList, setDiaryList] = useState<{title: string, content: string}[]>(() => {
    return testList.slice(0, 5);
  });
  
  const changePage = (page: number):void => {
    const selectedDiaryList = testList.slice(5 * (page -1), 5 * (page -1) + 5);
    setDiaryList(selectedDiaryList);
    animateDiary();
  }

  const animateDiary = ():void => {
    animation.start(custom => ({
      opacity: [0, 0, 1],
      x:[-50, 0],
      transition: {
        duration: 0.8 + custom * 0.1
      }
    }))
  }

  return (
    <DiaryWrapper>
      <CustomPagination count={MAXPAGINATION} onChange={(_,number) => changePage(number)} variant="outlined" color="primary" />
      <div className='diary_list'>
        {
          diaryList.map((diary, index) => {
            return(
              <Diary
                title={diary.title}
                content={diary.content}
                key={index}
                animation={animation}
                custom={index % 5}
              />
            )
          })
        }
      </div>
    </DiaryWrapper>
  );
};

const DiaryWrapper = styled.div`
  width: 75%;
  min-height: 635px;
`

const CustomPagination = styled(Pagination)`
  .MuiPagination-ul{
    display: flex;
    justify-content: center;
  }
  .MuiPagination-ul button{
    color: #FFFFFF;
  }
  .MuiPagination-ul div{
    color: #FFFFFF;
  }
`
  
export default DiaryList;
