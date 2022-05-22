import React from 'react';
import { render, screen } from 'test-utils';
import { TodoTaskList } from './TodoTaskList';
// import { TodoTask } from '../TodoTask/TodoTask';

describe('TodoTaskList', () => {
  const taskTodoListMock = [
    {
      text: 'example text 1',
      onStarClick: () => {},
      onDoneClick: () => {},
      isDone: false,
      isImportant: false,
    },
    {
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
    const firstTaskName = screen.getByText('example test 1');
    expect(firstTaskName).toBeInTheDocument();
  });
  // it('should display list of todo tasks', () => {
  // });
  // it('should only display incomplete tasks by default', () => {
  // });
  // it('should toggle visibility of completed tasks when button is clicked', () => {
  // });
});
