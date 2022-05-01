import React from 'react';
import { StyledComponent } from './App.styled';
import { Logo } from 'components/Logo/Logo';

export const App = () => {
  return (
    <div className="App">
      <StyledComponent>
        <Logo className={''} alt={''} isWithoutLogoTyp={'full'} height={0} />
      </StyledComponent>
    </div>
  );
};
