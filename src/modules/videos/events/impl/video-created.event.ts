export class VideoCreatedEvent {
  constructor(
    public readonly videoId: number,
    public readonly filePath: string,
  ) {}
}