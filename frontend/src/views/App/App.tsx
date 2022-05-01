import React from 'react';
import { StyledComponent } from './App.styled';
import { Logo } from 'components/Logo/Logo';

export const App = () => {
  return (
    <div className="App">
      <StyledComponent>
        <Logo isWithoutLogoTyp={'small'} className={''} alt={''} height={0} />
      </StyledComponent>
    </div>
  );
};
