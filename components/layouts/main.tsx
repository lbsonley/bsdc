import React from 'react';
import Header, { HeaderThemes } from './partials/header';

const MainLayout: React.FC<MainLayoutProps> = ({ children, headerTheme }) => {
  return (
    <>
      <Header theme={headerTheme} />
      {children}
    </>
  );
};

type MainLayoutProps = {
  headerTheme?: HeaderThemes;
  children: JSX.Element;
};

export default MainLayout;
