import { Typography, Col } from 'antd';
import { IconButton } from './IconButton/IconButton';
import { StyledRow } from './TodoTask.styled';

export type TodoTaskProps = {
  text: string;
  onStarClick(): void;
  onDoneClick(): void;
  isDone: boolean;
  isImportant: boolean;
};

export const TodoTask = ({ text, onDoneClick, isDone, isImportant, onStarClick }: TodoTaskProps) => {
  return (
    <StyledRow isDone={isDone} wrap={false} align={'middle'} gutter={[16, 16]}>
      <Col flex={'none'}>
        <IconButton onClick={onDoneClick} variant={'check'} isOn={isDone} />
      </Col>
      <Col flex={'auto'}>
        {/*TODO: Ustawić jakiś variant typography, a jakiś inny  wariant jak task będzie isDone=true*/}
        <Typography>{text}</Typography>
      </Col>
      <Col flex={'none'}>
        <IconButton onClick={onStarClick} variant={'star'} isOn={isImportant} />
      </Col>
    </StyledRow>
  );
};
