import React from 'react';
import { StyledComponent } from './App.styled';
import { TodoTaskList } from 'components/TodoTaskList/TodoTaskList';
import { ListMock } from 'mock-data/TodoTaskList/TodotaskListMock';

export const App = () => {
  return (
    <div className="App">
      <StyledComponent>
        <p>
          Edit <code>src/App.tsx</code> and save to reload...
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <TodoTaskList todoTasks={ListMock.todoTasks} />
      </StyledComponent>
    </div>
  );
};
