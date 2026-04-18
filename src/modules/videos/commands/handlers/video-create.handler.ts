import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { VideoCreateCommand } from '../impl/video-create.command';
import { VideoCreatedEvent } from '../../events/impl/video-created.event';

@CommandHandler(VideoCreateCommand)
export class CreateVideoHandler implements ICommandHandler<VideoCreateCommand> {
  constructor(private eventBus: EventBus) {}

  async execute(command: VideoCreateCommand) {
    const video = {
      id: Date.now(),
      filePath: command.filePath,
      userId: command.userId,
    };

    console.log('dc')

    this.eventBus.publish(new VideoCreatedEvent(video.id, video.filePath) as any);

    return video;
  }
}