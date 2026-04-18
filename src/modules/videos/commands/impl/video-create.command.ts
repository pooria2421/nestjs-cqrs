export class VideoCreateCommand {
  constructor(
    public readonly filePath: string,
    public readonly userId: number,
  ) {}
}