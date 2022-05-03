import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface AdminContextValue {
  isLogin: boolean
  setIsLogin: (isLogin: boolean) => void
}

const AdminContext = createContext<AdminContextValue | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const AdminProvider = ({children}: Props) => {

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [cookies] = useCookies();

  useEffect(() => {
    console.log(cookies)
    if(!cookies.admin) {
      setIsLogin(false);
    }
  }, [cookies]);

  return(
    <AdminContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdminContext = () => {
  return useContext(AdminContext)
}
export default AdminProvider;