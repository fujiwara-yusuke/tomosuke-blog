import { useRouter } from 'next/router';
import { FC } from "react";
import { useCookies } from "react-cookie";

const AdminTop:FC = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  
  const logout = () => {
    removeCookie('admin');
    router.push('/');
  }

  return (
    <button onClick={logout}>ログアウト</button>
  )
}

export default AdminTop;