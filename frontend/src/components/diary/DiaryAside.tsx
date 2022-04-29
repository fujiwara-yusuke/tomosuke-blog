import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { motion } from "framer-motion";

interface Props{
  markdown: string
}

const DiaryAside = ({markdown}: Props) => {
  return(
    <CustomAside animate={{
      display: "initial",
      opacity: [0, 1],
      transition: {
        duration: 1
      }
    }}>
      <div className='aside_wrapper'>
        <div>

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
                    <a href={"#"+String(children)}>{String(children)}</a>
                  </div>
                );
              }
            }}
            children={markdown}
          />
        </div>
      </div>
    </CustomAside>
  )
}

const CustomAside = styled(motion.aside)`
  display: none;
  width: 25%;
  padding-left: 10px;
  .aside_wrapper {
    height: 100%;
    background: #f7f7f7;
    color: black;
    border-radius: 5px;
    padding: 20px 10px;

  }
  position: sticky;
  top: 0;
  z-index: 10;

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