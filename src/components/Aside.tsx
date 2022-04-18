import Image from 'next/image';
import styled from 'styled-components';

const Aside = () => {
  return(
    <CustomAside>
      <div className='aside_wrapper'>
        <div className='profile'>
          <div className='img_wrapper'>
            <Image src="/profile.png" height={200} width={200}/>
          </div>
          <div>
            <p>名前: 藤原友輔</p>
            <p>趣味: 散歩、麻雀、ギター</p>
            <p>職業: エンジニア</p>
            <p>
              創作意欲がいきなり出たのでブログを開設
            </p>
          </div>
        </div>
      </div>
    </CustomAside>
  )
}

const CustomAside = styled.aside`
  width: 25%;
  padding-left: 10px;
  .aside_wrapper {
    height: 100%;
    background: #FFFFFF;
    color: black;
    border-radius: 5px;
  }
  .profile{
    display: flex;
    flex-direction: column;
  }

  .img_wrapper{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`

export default Aside;