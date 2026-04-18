import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import VideoProcessThumbnailFailEvent from '../impl/video-delete.command';
import { VideoDocument } from '../../domain/schema/video-schema';
import VideoDeleteCommand from '../impl/video-delete.command';

@EventsHandler(VideoDeleteCommand)
export default class VideoDeleteEventHandler
  implements IEventHandler<VideoDeleteCommand>
{
  constructor(private readonly videoRepository: VideoDocument) {}
  handle(event: VideoDeleteCommand) {
    console.log('sdsd');
    this.videoRepository.findByIdAndDelete(event.videoId);
  }
}
