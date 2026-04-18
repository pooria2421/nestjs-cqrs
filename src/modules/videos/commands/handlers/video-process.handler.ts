import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { VideoProcessCommand } from '../impl/video-process.command';
import { VideoProcessEventHandler } from '../../events/handlers/video-process.handler';
import { VideoProcessEvent } from '../../events/impl/video-process.event';

@CommandHandler(VideoProcessCommand)
export default class VideoProcessHandler
  implements ICommandHandler<VideoProcessCommand>
{
  constructor(private readonly eventBus: EventBus) {}
  async execute(command: VideoProcessCommand): Promise<any> {
    console.log('processing video ...');

    // if video processing success
    this.eventBus.publish(new VideoProcessEvent(command.videoId));
  }
}
