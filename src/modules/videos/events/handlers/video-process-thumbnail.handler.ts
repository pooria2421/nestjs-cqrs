import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { VideoProcessThumbnailEvent } from '../impl/video-process-thumbnail.event';

@EventsHandler(VideoProcessThumbnailEvent)
export class VideoProcessThumbnailEventHandler
  implements IEventHandler<VideoProcessThumbnailEvent>
{
  handle(event: VideoProcessThumbnailEvent) {}
}
