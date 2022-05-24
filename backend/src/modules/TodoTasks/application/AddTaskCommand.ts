export class AddTaskCommand {
  readonly taskName: string;
  readonly userId: string;
  readonly isDone: boolean;
  readonly isImportant: boolean;

  constructor(props: { taskName: string; userId: string; isDone: boolean; isImportant: boolean }) {
    this.taskName = props.taskName;
    this.userId = props.userId;
    this.isDone = props.isDone;
    this.isImportant = props.isImportant;
  }
}
