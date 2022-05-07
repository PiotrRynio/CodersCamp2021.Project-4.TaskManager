export class AddEmailCommand {
  readonly userEmail: string;

  constructor(props: { userEmail: string }) {
    this.userEmail = props.userEmail;
  }
}
