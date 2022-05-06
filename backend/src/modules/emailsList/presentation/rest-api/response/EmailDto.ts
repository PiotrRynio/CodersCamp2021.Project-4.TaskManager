export class EmailDto {
  readonly userEmailId: string;
  readonly userEmail: string;

  constructor(props: { userEmailId: string; userEmail: string }) {
    this.userEmailId = props.userEmailId;
    this.userEmail = props.userEmail;
  }
}
