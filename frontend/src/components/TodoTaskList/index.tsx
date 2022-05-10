import { List } from 'antd';
import { TodoTaskProps } from '../TodoTask/TodoTask';
import { TodoTaskListProps } from './TodoTaskProps';
import { useTodoTasks } from './useTodoTasks';
import { TodoTaskListFooter } from './TodoTaskListFooter';
import { TodoTask } from '../TodoTask/TodoTask';
import { StyledList } from './index.styled';

export const TodoTaskList = ({ todoTasks }: TodoTaskListProps) => {
  const { tasks, completedTaskVisible, toggleTheVisibilityOfDoneTasks } = useTodoTasks(todoTasks);
  return (
    <StyledList>
      <List
        header={<div>Header</div>}
        footer={
          <TodoTaskListFooter
            completedTaskVisible={completedTaskVisible}
            toggleTheVisibilityOfDoneTasks={toggleTheVisibilityOfDoneTasks}
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
    </StyledList>
  );
};
