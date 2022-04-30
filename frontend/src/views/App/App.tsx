import React from 'react';
import { AppRoutes } from 'routes/AppRoutes';
import { StyledComponent } from './App.styled';

export const App = () => {
  return (
    <div className="App">
      <StyledComponent>
        <AppRoutes />
      </StyledComponent>
    </div>
  );
};
