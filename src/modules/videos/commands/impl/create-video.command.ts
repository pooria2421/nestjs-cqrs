export class CreateVideoCommand {
  constructor(
    public readonly filePath: string,
    public readonly userId: number,
  ) {}
}