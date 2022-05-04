import { List } from 'antd';
import { TodoTaskListProps } from './types';

export const TodoTaskList = ({ todoTasks }: TodoTaskListProps) => {
  return (
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={todoTasks}
      renderItem={(item) => (
        <List.Item>
          <div>{item.text}</div>
        </List.Item>
      )}
    />
  );
};
