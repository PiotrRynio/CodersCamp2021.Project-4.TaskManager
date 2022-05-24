export class TaskResponseDto {
  readonly userId: string;
  readonly taskName: string;
  readonly isDone: boolean;
  readonly isImportant: boolean;

  constructor(props: { userId: string; taskName: string; isDone: boolean; isImportant: boolean }) {
    this.userId = props.userId;
    this.taskName = props.taskName;
    this.isDone = props.isDone;
    this.isImportant = props.isImportant;
  }
}
