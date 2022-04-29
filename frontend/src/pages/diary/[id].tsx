import { motion } from 'framer-motion';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Diary = () => {

  const animationSetting = {
    opacity: [0, 1],
    transition: {
      duration: 1
    }
  }

  const tags = ["TagTagTagTag", "TagTagTagTag", "TagTagTagTag", "TagTagTagTag"];

  const ankerLink = ({ node, ...props }) => {
    return (
        <a href={"#"+node.position?.start.line.toString()}>{props.children}</a>
    );
  }
  
  const markdown = `
  # これはテストです。
  A paragraph with *emphasis* and **strong importance**.  
  これはテストです。気にしないでください。  
  文末にスペースを2回しないといけないのが面倒くさいかもどうすればええんやろうか
  
  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  文末にスペースを2回しないといけないのが面倒くさいかもどうすればええんやろうか  
  * Lists
  * [ ] to do
  * [x] done
  
  1. test
  2. test
  
  | a | b |
  | - | - |
  | a | b |
  | a | b |
  | a | b |
  | a | b |
  | a | b |
  | a | b |

  Here is some JavaScript code:

  ~~~js:index.js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import ReactMarkdown from 'react-markdown'
  import MyFancyRule from './components/my-fancy-rule.js'
  const Diary = "test";
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

  | a | b  |  c |  d  |
  | - | :- | -: | :-: |
  # これはテストです2。
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
        allowedElements={["h1"]}
        components={{h1: ankerLink}}
        children={markdown}
      />
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
    wthite-space: pre-wrap;
  }

  .markdown p{
  }
`

export default Diary;