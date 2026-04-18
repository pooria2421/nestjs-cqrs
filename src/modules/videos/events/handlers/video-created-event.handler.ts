import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { VideoCreatedEvent } from '../impl/video-created.event';

@EventsHandler(VideoCreatedEvent)
export class VideoCreatedEventHandler
  implements IEventHandler<VideoCreatedEvent>
{
  handle(event: VideoCreatedEvent) {}
}
