export class VideoCreateCommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
  ) {}
}
