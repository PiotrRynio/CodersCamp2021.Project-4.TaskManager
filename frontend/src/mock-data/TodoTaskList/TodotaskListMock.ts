import { TodoTaskListProps } from '../../components/TodoTaskList/types';

export const ListMock: TodoTaskListProps = {
  todoTasks: [
    {
      text: 'example text 1',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: true,
      isImportant: false,
    },
    {
      text: 'example text 3',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: true,
      isImportant: false,
    },
    {
      text: 'example text 4',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: false,
      isImportant: true,
    },
    {
      text: 'example text 5',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: false,
      isImportant: false,
    },
    {
      text: 'example text 6',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: true,
      isImportant: false,
    },
    {
      text: 'example text 7',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: false,
      isImportant: false,
    },
    {
      text: 'example text 8',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: false,
      isImportant: false,
    },
    {
      text: 'example text 9',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: false,
      isImportant: false,
    },
    {
      text: 'example text 10',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: true,
      isImportant: false,
    },
    {
      text: 'example text 11',
      onStarClick: () => {
        console.log('on start click');
      },
      onDoneClick: () => {
        console.log('on done click');
      },
      isDone: false,
      isImportant: false,
    },
  ],
};
