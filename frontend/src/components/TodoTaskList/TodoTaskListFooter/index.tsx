import { TodoTaskListFooterProps } from './types';
import { StyledTodoTaskListFooter } from './index.styled';

export const TodoTaskListFooter = ({
  completedTaskVisible,
  handleCompleteTasks,
}: TodoTaskListFooterProps) => {
  return (
    <StyledTodoTaskListFooter onClick={handleCompleteTasks}>
      <span>{completedTaskVisible ? 'Hide complete tasks' : 'Show complete tasks'}</span>
    </StyledTodoTaskListFooter>
  );
};
