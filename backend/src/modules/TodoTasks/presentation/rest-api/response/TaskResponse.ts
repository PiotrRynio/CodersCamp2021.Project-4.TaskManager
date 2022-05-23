export class TaskResponse {
  readonly userId: string;
  readonly taskName: string;

  constructor(props: { userId: string; taskName: string }) {
    this.userId = props.userId;
    this.taskName = props.taskName;
  }
}
