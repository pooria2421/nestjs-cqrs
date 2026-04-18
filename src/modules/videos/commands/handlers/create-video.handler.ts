import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { VideoCreatedEvent } from '../../events/impl/video-created.event';
import { VideoCreateCommand } from '../impl/video-create.command';

@CommandHandler(VideoCreateCommand)
export class CreateVideoHandler implements ICommandHandler<VideoCreateCommand> {
  constructor(private eventBus: EventBus) {}

  async execute(command: VideoCreateCommand) {
    const video = {
      id: Date.now(),
      filePath: command.filePath,
      userId: command.userId,
    };

    this.eventBus.publish(
      new VideoCreatedEvent(video.id, video.filePath) as any,
    );

    return video;
  }
}
