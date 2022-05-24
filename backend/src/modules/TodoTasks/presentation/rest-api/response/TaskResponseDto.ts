export class TaskResponseDto {
  readonly userId: string;
  readonly taskName: string;
  readonly isDone: boolean;
  readonly isImportant: boolean;
  readonly taskId: string;

  constructor(props: {
    userId: string;
    taskName: string;
    isDone: boolean;
    isImportant: boolean;
    taskId: string;
  }) {
    this.userId = props.userId;
    this.taskName = props.taskName;
    this.isDone = props.isDone;
    this.isImportant = props.isImportant;
    this.taskId = props.taskId;
  }
}
