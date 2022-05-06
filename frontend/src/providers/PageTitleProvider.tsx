import { createContext, useContext, useState } from 'react';

interface TitleContext {
  title: string;
  setTitle: (newTitle: string) => void;
}

const appContextDefaultValue = {
  title: '',
  setTitle: (newTitle: string) => {},
};

const PageTitleContext = createContext<TitleContext>(appContextDefaultValue);

const PageTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState<string>(appContextDefaultValue.title);

  return <PageTitleContext.Provider value={{ title, setTitle }}>{children}</PageTitleContext.Provider>;
};

const usePageTitle = () => useContext(PageTitleContext);

export { PageTitleProvider, usePageTitle };
