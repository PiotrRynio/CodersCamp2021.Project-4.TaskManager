import { StyledComponent } from './App.styled';
import { TodoTask } from '../../components/TodoTask/TodoTask';

export const App = () => {
  return (
    <div className="App">
      <StyledComponent>
        <TodoTask
          text={'Jakiś przykładowy tekst'}
          onStarClick={() => {}}
          onDoneClick={() => {}}
          isDone={false}
          isImportant={false}
        />
      </StyledComponent>
    </div>
  );
};
