import React from 'react';
import { render, screen } from 'test-utils';
import { TodoTaskList } from './TodoTaskList';

describe('TodoTaskList', () => {
  const taskTodoListMock = [
    {
      id: '52637bcf-e6ca-46e0-8d9d-204a74e31fec',
      text: 'example text 1',
      onStarClick: () => {},
      onDoneClick: () => {},
      isDone: false,
      isImportant: false,
    },
    {
      id: 'd33a3b2d-8dbd-43ed-a36c-7075e8f75773',
      text: 'example text 3',
      onStarClick: () => {},
      onDoneClick: () => {},
      isDone: false,
      isImportant: false,
    },
  ];
  it('renders TodoTaskList component', () => {
    const todoTaskList = <TodoTaskList todoTasks={taskTodoListMock} />;
    render(todoTaskList);
  });
});
