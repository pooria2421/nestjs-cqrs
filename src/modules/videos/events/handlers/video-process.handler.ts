import { EventBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { VideoProcessEvent } from '../impl/video-process.event';

@EventsHandler(VideoProcessEvent)
export class VideoProcessEventHandler
  implements IEventHandler<VideoProcessEvent>
{
  handle(event: VideoProcessEvent) {}
}
