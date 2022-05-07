import { List } from 'antd';
import { TodoTaskProps } from '../TodoTask/TodoTask';
import { TodoTaskListProps } from './types';
import { useTodoTasks } from './hook';
import { TodoTaskListFooter } from './TodoTaskListFooter';
import { TodoTask } from '../TodoTask/TodoTask';
import { StyledList } from './index.styled';

export const TodoTaskList = ({ todoTasks }: TodoTaskListProps) => {
  const { tasks, completedTaskVisible, handleCompleteTasks } = useTodoTasks(todoTasks);
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
      renderItem={(task: TodoTaskProps) => (
        <List.Item>
          <TodoTask {...task} />
        </List.Item>
      )}
    />
  );
};
