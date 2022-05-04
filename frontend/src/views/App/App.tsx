import React from 'react';
import { StyledComponent } from './App.styled';
import { Logo } from 'components/Logo/Logo';

export const App = () => {
  return (
    <div className="App">
      <StyledComponent>
        <Logo isWithoutLogoTyp={'full'} height={30} />
      </StyledComponent>
    </div>
  );
};
