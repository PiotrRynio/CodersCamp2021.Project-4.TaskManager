import React from 'react';
import { render, screen } from 'test-utils';
import { TodoTaskList } from './TodoTaskList';
import { TodoTaskDto } from '../../states/services';

describe('TodoTaskList', () => {
  const taskTodoListMock: TodoTaskDto[] = [
    {
      userId: '52637bcf-e6ca-46e0-8d9d-204a74e31fec',
      taskName: 'example text 1',
      isDone: false,
      isImportant: false,
      taskId: 'test-id-1',
    },
    {
      userId: 'd33a3b2d-8dbd-43ed-a36c-7075e8f75773',
      taskName: 'example text 3',
      isDone: false,
      isImportant: false,
      taskId: 'test-id-2',
    },
  ];
  it('renders TodoTaskList component', () => {
    const todoTaskList = <TodoTaskList todoTasks={taskTodoListMock} />;
    render(todoTaskList);
  });
});
