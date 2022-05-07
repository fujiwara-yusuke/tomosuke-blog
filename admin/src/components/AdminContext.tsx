import React, {createContext, useContext, FC, useState} from 'react';

interface Tag {
  id: number;
  name: string;
  date: Date;
};

export interface authContextType {
  tagList: Tag[];
  setTagList: (tagList: Tag[]) => void;
};

function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useAdminContext, SetAdminProvider] = createCtx<authContextType>();

const useAuthCtx = (): authContextType => {
  const [tagList, setTagList] = useState<Tag[]>([]);
  
  return { tagList, setTagList};
};

const AdminProvider: FC = (props) => {
  const auth = useAuthCtx();
  return <SetAdminProvider value={auth}>{props.children}</SetAdminProvider>;
};

export default AdminProvider;