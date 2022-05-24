import { TodoTaskProps } from '../TodoTask/TodoTask';
import { TodoTaskListProps } from './TodoTaskProps';
import { TodoTaskDto } from '../../states/services/todoTasks';
import { useTodoTasks } from './useTodoTasks';
import { TodoTask } from '../TodoTask/TodoTask';
import { StyledList, StyledTodoTaskListFooter, StyledRow } from './TodoTaskList.styled';

export const TodoTaskList = ({ todoTasks }: TodoTaskListProps) => {
  const todoTaskListProps = todoTasks.map((task: TodoTaskDto): TodoTaskProps[] => {
    return {
      id: task.taskId,
      text: task.taskName,
      isDone: task.isDone,
      isImportant: task.isImportant,
      onStarClick: () => {},
      onDoneClick: () => {},
    };
  });

  const { tasks, completedTaskVisible, toggleTheVisibilityOfDoneTasks } = useTodoTasks(todoTaskListProps);
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
