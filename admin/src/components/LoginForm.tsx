import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Axios, LoginUrl } from 'utils/api';
import TextField from '@mui/material/TextField';
import { useCookies } from "react-cookie";

interface LoginInfo{
  email:      string
  password:   string
}

const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>();
  const [cookies, setCookie] = useCookies();

  const onSubmit = async (data: LoginInfo) => {
    try{
      const res = await Axios.post(LoginUrl, {
        email: data.email,
        password: data.password
      })
      if(res.status == 200){
        setCookie('admin', {
          id: res.data.result.id,
          name: res.data.result.name,
          email: res.data.result.email,
          password: res.data.result.password,
        });
        router.push('/admin');
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <LoginDisplay>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ログイン画面</h1>
          <div className='form_wrapper'>
            <div className="item_form">
              <div className="email">
                メールアドレス
                {errors.email && errors.email.type === "required" && <span className="err_msg">入力してください</span>}
                {errors.email && errors.email.type === "pattern"  && <span className="err_msg">メールアドレスのパターンが合っていません</span>}
              </div>
              <input type='email' defaultValue={cookies.admin?.email} placeholder='email' {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} />
            </div>
            <div className="item_form">
              <div className="password">
                パスワード
                {errors.password && errors.password.type === "required" && <span className="err_msg">入力してください</span>}
              </div>
              <input type='password' defaultValue={cookies.admin?.password} placeholder='password' {...register("password", { required: true })} autoComplete=''/>
            </div>
            <div className="submit_wrapper">
              <button value="ログイン" type='submit'>ログイン</button>
            </div>
          </div>
      </form>
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
  div.item_form{
    width: 100%;
    padding: 10px;
  }
  div.item_form div{
    color: #000000;
  }
  div.item_form input{
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
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
`

export default LoginForm;
