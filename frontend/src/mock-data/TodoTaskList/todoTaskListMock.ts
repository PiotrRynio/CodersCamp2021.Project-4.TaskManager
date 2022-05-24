import { TodoTaskListProps } from '../../components/TodoTaskList/TodoTaskProps';

export const todoTaskListMock: TodoTaskListProps = {
  todoTasks: [
    {
      id: '4ee9ff77-1e29-4b06-aa59-969ebb8b6676',
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
      id: 'f9b71bb4-d7f2-468c-b79b-ac761116993a',
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
      id: 'c53f79d7-105c-4795-89ea-891de834c618',
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
      id: '7f195df1-38c3-4f89-9573-4c3365fb6d60',
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
      id: 'ebd18ee9-0e95-44b7-8332-cf96cd0b4294',
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
      id: '9c2961b6-6e43-4d87-9cec-29f2924fe775',
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
      id: 'd2bb9040-c745-40bf-a875-a834bf50c094',
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
      id: '246c9798-6614-41bc-8bf1-f581fb36486f',
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
      id: '52637bcf-e6ca-46e0-8d9d-204a74e31fec',
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
      id: 'd33a3b2d-8dbd-43ed-a36c-7075e8f75773',
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
