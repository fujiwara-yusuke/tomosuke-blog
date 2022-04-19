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

const Tags = ({closeModal}: Props) => {
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
      <TagsHead>
        <div className="title">Tags</div>
        <CloseIcon onClick={closeModal}/>
      </TagsHead>
      <CustomUl>
        {
          tagList.map((tag, index) => {
            return(
              <li key={index}>{tag.name}({tag.count})</li>
            )
          })
        }
      </CustomUl>
    </>
  )
}

const TagsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  font-size: 45px;
`

const CustomUl = styled.ul`
  .title{
    font-size: 45px;
  }
  li{
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
  }
`

export default Tags;