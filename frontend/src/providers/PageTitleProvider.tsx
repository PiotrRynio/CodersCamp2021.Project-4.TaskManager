import { createContext, ReactNode, useContext, useState } from 'react';

interface ItitleContext {
  title: string | null;
  setTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

const PageTitleContext = createContext({} as ItitleContext);

const PageTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string | null>(null);

  return <PageTitleContext.Provider value={{ title, setTitle }}>{children}</PageTitleContext.Provider>;
};

const usePageTitle = () => useContext(PageTitleContext);

export { PageTitleProvider, usePageTitle };
