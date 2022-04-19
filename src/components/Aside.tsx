import Image from 'next/image';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Aside = () => {
  return(
    <CustomAside animate={{
      display: "initial",
      opacity: [0, 1],
      transition: {
        duration: 1
      }
    }}>
      <div className='aside_wrapper'>
        <div className='profile_img'>
          <div className='img_wrapper'>
            <Image src="/profile.png" height={200} width={200}/>
          </div>
          <div className='profile'>
            <p>名前: ユスけ</p>
            <p>趣味: 散歩、麻雀、ギター</p>
            <p>職業: エンジニア</p>
            <p>
              創作意欲がいきなり出たのでブログを開設<br/>
              超不定期な投稿になるかと思います<br/>
              このやる気を継続するように頑張ります<br/>
              画像はスティーブ・ガッドのライブの物です
            </p>
          </div>
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
  }
  .profile_img{
    display: flex;
    flex-direction: column;
  }
  .img_wrapper{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .profile{
    padding: 10px 15px;
  }
  .profile p{
    padding: 5px 0px;
    margin: 0px;
  }
`

export default Aside;