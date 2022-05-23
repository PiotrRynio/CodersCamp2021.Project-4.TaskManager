import React from 'react';
import { render, screen } from 'test-utils';
// import { TodoTaskList } from './TodoTaskList';
import { TodoTask } from '../TodoTask/TodoTask';

describe('TodoTaskList', () => {
  const todoTaskMock = {
    id: 'd33a3b2d-8dbd-43ed-a36c-7075e8f75773',
    text: 'example text 1',
    onStarClick: () => {},
    onDoneClick: () => {},
    isDone: false,
    isImportant: false,
  };
  it('renders TodoTask component', () => {
    const todoTaskList = <TodoTask {...todoTaskMock} />;
    render(todoTaskList);
  });
});
