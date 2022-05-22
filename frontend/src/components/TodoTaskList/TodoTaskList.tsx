import { List } from 'antd';
import { TodoTaskProps } from '../TodoTask/TodoTask';
import { TodoTaskListProps } from './TodoTaskProps';
import { useTodoTasks } from './useTodoTasks';
import { TodoTask } from '../TodoTask/TodoTask';
import { StyledList, StyledTodoTaskListFooter } from './TodoTaskList.styled';

export const TodoTaskList = ({ todoTasks }: TodoTaskListProps) => {
  const { tasks, completedTaskVisible, toggleTheVisibilityOfDoneTasks } = useTodoTasks(todoTasks);
  return (
    <StyledList>
      <List
        header={<div>Header</div>}
        footer={
          <StyledTodoTaskListFooter>
            <button onClick={toggleTheVisibilityOfDoneTasks}>
              {completedTaskVisible ? 'Hide complete tasks' : 'Show complete tasks'}
            </button>
          </StyledTodoTaskListFooter>
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
