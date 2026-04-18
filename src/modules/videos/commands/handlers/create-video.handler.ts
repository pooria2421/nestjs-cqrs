import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateVideoCommand } from '../impl/create-video.command';
import { VideoCreatedEvent } from '../../events/impl/video-created.event';

@CommandHandler(CreateVideoCommand)
export class CreateVideoHandler implements ICommandHandler<CreateVideoCommand> {
  constructor(private eventBus: EventBus) {}

  async execute(command: CreateVideoCommand) {
    const video = {
      id: Date.now(),
      filePath: command.filePath,
      userId: command.userId,
    };

    this.eventBus.publish(new VideoCreatedEvent(video.id, video.filePath) as any);

    return video;
  }
}