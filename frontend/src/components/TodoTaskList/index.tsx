import { List } from 'antd';
import { TodoTaskProps } from './types';
import { TodoTaskListProps } from './types';
import { useTodoTasks } from './hook';
import { TodoTaskListFooter } from './TodoTaskListFooter';

export const TodoTaskList = ({ todoTasks }: TodoTaskListProps) => {
  const { tasks, completedTaskVisible, handleCompleteTasks } = useTodoTasks(todoTasks);
  console.log(tasks);

  return (
    <List
      header={<div>Header</div>}
      footer={
        <TodoTaskListFooter
          completedTaskVisible={completedTaskVisible}
          handleCompleteTasks={handleCompleteTasks}
        />
      }
      bordered
      dataSource={tasks}
      renderItem={(item: TodoTaskProps) => (
        <List.Item>
          <div>{item.text}</div>
        </List.Item>
      )}
    />
  );
};
