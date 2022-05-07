export class AddTaskCommand {
  readonly taskName: string;
  readonly userId: string;
  constructor(props: { taskName: string; userId: string }) {
    this.taskName = props.taskName;
    this.userId = props.userId;
  }
}
