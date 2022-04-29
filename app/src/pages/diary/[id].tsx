import DiaryMain from 'components/diary/DiaryMain';
import DiaryAside from 'components/diary/DiaryAside';

const Diary = () => {

  const tags = ["TagTagTagTag", "TagTagTagTag", "TagTagTagTag", "TagTagTagTag"];
  
  const markdown = `
  # これはテストです。1
  ## これはテストです。1_1
  ## これはテストです。1_2
  ## これはテストです。1_3
  ## これはテストです。1_4
  ## これはテストです。1_5
  ## これはテストです。1_6
  # これはテストです。2
  A paragraph with *emphasis* and **strong importance**.  
  これはテストです。気にしないでください。  
  文末にスペースを2回しないといけないのが面倒くさいかもどうすればええんやろうか
  
  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.  
  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.  
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
  これでおそらく移動できるでしょうね\n
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  これでおそらく移動できるでしょうね  
  `

  return (
    <>
      <DiaryMain markdown={markdown} tags={tags}/>
      <DiaryAside markdown={markdown}/>
    </>
  );
};
  
export default Diary;
