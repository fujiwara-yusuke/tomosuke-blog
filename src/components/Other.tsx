import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  closeModal: () => void,
}

const Other = ({closeModal}: Props) => {
  return(
    <>
      <OtherHead>
        <div className="title">Coming Soon ...</div>
        <CloseIcon onClick={closeModal}/>
      </OtherHead>
    </>
  )
}

const OtherHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  font-size: 45px;
`

export default Other;