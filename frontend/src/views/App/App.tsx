import React from 'react';
import { StyledComponent } from './App.styled';
import { Button } from '../../components/Button/Button';

export const App = () => {
  return (
    <div className="App">
      <StyledComponent>
        <Button htmlType="button">Hello</Button>
      </StyledComponent>
    </div>
  );
};
