export class PostCreateTaskRequestBody {
  constructor(
    readonly taskName: string,
    readonly userId: string,
    readonly isDone: boolean,
    readonly isImportant: boolean,
  ) {}
}
