import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateVideoProcessThumnailCommand } from '../impl/video-process.thumbnail.command';

@CommandHandler(CreateVideoProcessThumnailCommand)
export default class VideoProcessThumbnailHandler
  implements ICommandHandler<CreateVideoProcessThumnailCommand>
{
  constructor(private readonly eventBus: EventBus) {}
  async execute(command: CreateVideoProcessThumnailCommand): Promise<any> {
    console.log('generating thumbnail...');
    console.log('success!');
  }
}
