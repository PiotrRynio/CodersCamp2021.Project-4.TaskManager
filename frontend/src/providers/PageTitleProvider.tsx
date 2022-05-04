import { createContext, ReactNode, useContext, useState } from 'react';

interface TitleContext {
  title?: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const PageTitleContext = createContext({} as TitleContext);

const PageTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>('');

  return <PageTitleContext.Provider value={{ title, setTitle }}>{children}</PageTitleContext.Provider>;
};

const usePageTitle = () => useContext(PageTitleContext);

export { PageTitleProvider, usePageTitle };
