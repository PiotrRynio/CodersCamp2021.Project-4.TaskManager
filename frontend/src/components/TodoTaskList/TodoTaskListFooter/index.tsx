import { TodoTaskListFooterProps } from './TodoTaskListFooterProps';
import { StyledTodoTaskListFooter } from './index.styled';

export const TodoTaskListFooter = ({
  completedTaskVisible,
  toggleTheVisibilityOfDoneTasks,
}: TodoTaskListFooterProps) => {
  return (
    <StyledTodoTaskListFooter>
      <button onClick={toggleTheVisibilityOfDoneTasks}>
        {completedTaskVisible ? 'Hide complete tasks' : 'Show complete tasks'}
      </button>
    </StyledTodoTaskListFooter>
  );
};
