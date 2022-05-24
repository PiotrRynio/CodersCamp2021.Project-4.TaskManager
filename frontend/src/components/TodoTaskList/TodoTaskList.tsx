import { TodoTaskProps } from '../TodoTask/TodoTask';
import { TodoTaskListProps } from './TodoTaskProps';
import { useTodoTasks } from './useTodoTasks';
import { TodoTask } from '../TodoTask/TodoTask';
import { StyledList, StyledTodoTaskListFooter, StyledRow } from './TodoTaskList.styled';

export const TodoTaskList = ({ todoTasks }: TodoTaskListProps) => {
  const { tasks, completedTaskVisible, toggleTheVisibilityOfDoneTasks } = useTodoTasks(todoTasks);
  return (
    <StyledList>
      {tasks.map((task: TodoTaskProps) => (
        <StyledRow isDone={task.isDone}>
          <TodoTask key={task.id} {...task} />
        </StyledRow>
      ))}
      <StyledTodoTaskListFooter>
        <button onClick={toggleTheVisibilityOfDoneTasks}>
          {completedTaskVisible ? 'Hide complete tasks' : 'Show complete tasks'}
        </button>
      </StyledTodoTaskListFooter>
    </StyledList>
  );
};
