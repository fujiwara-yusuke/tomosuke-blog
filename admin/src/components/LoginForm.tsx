import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Axios, LoginUrl } from 'utils/api';

interface LoginInfo{
  email:     string
  password:  string
}

const LoginForm = () => {

  const [failLogin, setFailLogin] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>();
  
  const onSubmit = async (data: LoginInfo) => {
    try{
      const res = await Axios.post(LoginUrl, {
        email: data.email,
        password: data.password
      })
      if(res.status == 200){
        console.log("認証成功");
        setFailLogin(false);
      }
    }catch(err){
      setFailLogin(true);
    }
  };

  return (
    <LoginDisplay>
      {
        failLogin ?
        <div className='fail_login'>ログインできませんでした</div>
        :
        null
      }
      <h1>ログイン画面</h1>
        <div className='form_wrapper'>
          <div className="item_form">
            <div className="email">
              メールアドレス
              {errors.email && errors.email.type === "required" && <span className="err_msg">入力してください</span>}
              {errors.email && errors.email.type === "pattern" && <span className="err_msg">メールアドレスのパターンが合っていません</span>}
            </div>
            <input placeholder='email' {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} />
          </div>
          <div className="item_form">
            <div className="password">
              パスワード
              {errors.password && errors.password.type === "required" && <span className="err_msg">入力してください</span>}
            </div>
            <input placeholder='password' {...register("password", { required: true })} />
          </div>
          <div className="submit_wrapper">
            <button value="ログイン" onClick={handleSubmit(onSubmit)}>ログイン</button>
          </div>
        </div>
    </LoginDisplay>
  );
};

const LoginDisplay = styled.div`
  h1{
    text-align: center;
  }

  div.form_wrapper{
    background: honeydew;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: auto;
    border-radius: 10px;
  }

  div.email,
  div.password{
    color: #000000;
  }
  div.item_form input{
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
  }
  div.item_form{
    width: 100%;
    padding: 10px;
  }
  div.submit_wrapper{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  span.err_msg{
    color: red;
    font-size:10px;
    margin: 10px;
  }

  .fail_login{
    background: red;
    color: #FFFFFFF;
    opacity: 0.8;
    text-align: center;
  }
`

export default LoginForm;
