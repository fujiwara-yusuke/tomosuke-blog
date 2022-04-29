import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

interface Props{
  markdown: string
}

const DiaryAside = ({markdown}: Props) => {
  return(
    <CustomAside>
      <div className='aside_wrapper'>
        <ReactMarkdown
          allowedElements={["h1", "h2"]}
          components={{
            h1({children}){
              return (
                <div className='h1'>
                  <a href={"#"+String(children)}>{String(children)}</a>
                </div>
              );
            },
            h2({children}){
              return (
                <div className='h2'>
                  <a href={"##"+String(children)}>{String(children)}</a>
                </div>
              );
            }
          }}
          children={markdown}
        />
      </div>
    </CustomAside>
  )
}

const CustomAside = styled.div`
  width: 25%;
  padding-left: 10px;
  position: sticky;
  top:10px;
  max-height: 755px;
  .aside_wrapper {
    background: #FFFFFF;
    color: #000000;
    height: 100%;
    border-radius: 5px;
    padding: 20px 10px;
  }
  .h1{
    font-size: 18px;
    font-weight: bold;
    margin: 5px 15px;
  }
  .h2{
    margin: 5px 25px;
  }
`

export default DiaryAside;