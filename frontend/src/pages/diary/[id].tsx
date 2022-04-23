import { motion } from 'framer-motion';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Diary = () => {

  const animationSetting = {
    opacity: [0, 1],
    transition: {
      duration: 1
    }
  }

  const tags = ["TagTagTagTag", "TagTagTagTag", "TagTagTagTag", "TagTagTagTag"];
  
  const markdown = `
  # A demo of \`react-markdown\`
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  | - | - |
  | - | - |
  | - | - |

  Here is some JavaScript code:

  ~~~js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import ReactMarkdown from 'react-markdown'
  import MyFancyRule from './components/my-fancy-rule.js'

  ReactDOM.render(
    <ReactMarkdown
      components={{
        // Use h2s instead of h1s
        h1: 'h2',
        // Use a component instead of hrs
        hr: ({node, ...props}) => <MyFancyRule {...props} />
      }}
    >
      # Your markdown here
    </ReactMarkdown>,
    document.querySelector('#content')
  )
  ~~~
  `

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
        <div className='date'>
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
                style={tomorrowNight}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </CustomDiary>
  )
}

const CustomDiary = styled(motion.div)`
  width: 100%;
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
  }
`

export default Diary;