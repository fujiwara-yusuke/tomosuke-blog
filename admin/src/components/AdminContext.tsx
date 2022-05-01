import React, {createContext, useState, ReactNode} from "react";

interface Admin{
  id: number
  email: string
  password: string
}

interface ContextInterface {
  admin: Admin | null | undefined
  isAuth: boolean
  setAdmin: (admin: Admin) => void
  login: () => void
  logout: () => void
}

const adminContext = createContext<ContextInterface | undefined>(undefined);

const AdminContextProvider = (children: any) => {
  const [admin, setAdmin] = useState<Admin|null|undefined>()
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const login = () => {
    setIsAuth(true);
  }

  const logout = () => {
    setIsAuth(false);
  }

  return(
    <adminContext.Provider value={{admin, setAdmin, isAuth, login, logout}}>
      {children}
    </adminContext.Provider>
  )
}

export default AdminContextProvider;