import { useRouter } from 'next/router';
import { FC, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from 'styled-components';
import { Axios, tagListUrl } from 'utils/api';
import EnhancedTable from 'components/TagTable';
import { useAdminContext } from 'components/AdminContext';

interface Tag {
  id: number
  name: string
  date: Date
}

const AdminTop:FC = () => {
  const ctx = useAdminContext();
  const router = useRouter();
  const [cookies] = useCookies();
  
  const logout = () => {
    router.push('/');
  }

  useEffect(() => {
    // if(cookies.admin == undefined){
    //   router.push('/')
    //   return;
    // }
    try{
      getAllTag();
    }catch(err){
      console.log(err);
    }
  },[])

  const getAllTag = async () => {
    const res = await Axios.get(tagListUrl, {
      params: {
        email: cookies.admin?.email,
        password: cookies.admin?.password
      }
    });

    ctx?.setTagList(res.data.status == 200 ? res.data.result : [])
  }

  return (
    <>
      <CustomHeader>
        <h1>管理画面</h1>
        <div>
          <button onClick={logout}>ログアウト</button>
          <button >投稿</button>
          <button >タグ</button>
          <button >投稿一覧</button>
          <button >マイページ</button>
        </div>
      </CustomHeader>
      <div>
        {
          ctx.tagList?.length > 0 ?
          <EnhancedTable/>
          :
          null
        }
      </div>
    </>
  )
}

const CustomHeader = styled.header`
  background: white;
  display: flex;
  color: black;
`

export default AdminTop;