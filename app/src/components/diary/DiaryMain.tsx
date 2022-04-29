import { motion } from 'framer-motion';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props{
  markdown: string
  tags: string[]
}

const DiaryMain = ({markdown, tags}: Props) => {

  const animationSetting = {
    opacity: [0, 1],
    transition: {
      duration: 1
    }
  }

  console.log('test');

  return(
    <CustomDiary animate={animationSetting}>
      <h1 className='title'>title</h1>
      <div className='diary_info'>
        <div className='tags_wrapper'>
          {
            tags.map((tag, index) => {
              return(
                <div key={index} className="tag_name">{tag}</div>
              )
            })
          }
        </div>
        <div className='publish_date'>
          2022/01/01 00:00
        </div>
      </div>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        className="markdown"
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={vscDarkPlus}
                language={match[1]}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          h1({children}) {
            return(
              <h1 id={String(children)}>{String(children)}</h1>
            )
          }
        }}
      />
    </CustomDiary>
  )
}

const CustomDiary = styled(motion.div)`
  width: 75%;
  opacity: 0;
  min-height: 635px;
  background: #f7f7f7;
  border-radius: 5px;
  color: black;
  h1.title{
    font-size: 45px;
    margin: 15px 25px;
  }
  .diary_info{
    display: flex;
    justify-content: space-between;
    margin: 0px 25px;
  }
  .tags_wrapper{
    display: flex;
  }
  .tag_name{
    padding: 5px;
    background: black;
    color: #FFF;
    font-size: 10px;
    margin-right: 5px;
  }
  .markdown{
    margin: 15px 25px;
    // wthite-space: pre-wrap;
  }
`

export default DiaryMain;