import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';

interface tagList{
  id: number,
  name: string,
  count: number
}

interface Props {
  closeModal: () => void,
}

const Ranking = ({closeModal}: Props) => {
  const tagList:tagList[] = [
    {id: 1, name: 'test', count: 5},
    {id: 2, name: 'test', count: 5},
    {id: 3, name: 'test', count: 5},
    {id: 4, name: 'test', count: 5},
    {id: 5, name: 'test', count: 5},
    {id: 6, name: 'test', count: 5},
    {id: 7, name: 'test', count: 5},
    {id: 8, name: 'test', count: 5}
  ]
  return(
    <>
      <RankingHead>
        <div className="title">Ranking</div>
        <CloseIcon onClick={closeModal}/>
      </RankingHead>
      <CustomOl>
        {
          tagList.map((tag, index) => {
            return(
              <li key={index}>{tag.name}({tag.count})</li>
            )
          })
        }
      </CustomOl>
    </>
  )
}

const RankingHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  font-size: 45px;
`

const CustomOl = styled.ol`
  .title{
    font-size: 45px;
  }
  li{
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
  }
`

export default Ranking;