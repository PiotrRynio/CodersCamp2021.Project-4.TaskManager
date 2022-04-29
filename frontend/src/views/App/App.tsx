import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="App">
      <StyledHeader>
        <p>
          Edit <code>src/App.tsx</code> and save to reload...
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
  background-color: red;
`;

export default App;
