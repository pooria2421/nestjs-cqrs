import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { VideosController } from './videos.controller';
import { CreateVideoHandler } from './commands/handlers/video-create.handler';
import { GetVideoHandler } from './queries/handlers/get-video.handler';
import { VideoCreatedEventHandler } from './events/handlers/video-created-event.handler';
import { VideoProcessThumbnailEventHandler } from './events/handlers/video-process-thumbnail.handler';
import { VideoProcessEventHandler } from './events/handlers/video-process.handler';
import { VideoSaga } from './saga/videos-process-saga';

@Module({
  imports: [CqrsModule],
  controllers: [VideosController],
  providers: [CreateVideoHandler, GetVideoHandler, VideoCreatedEventHandler , VideoProcessThumbnailEventHandler , VideoProcessEventHandler , VideoSaga],
})
export class VideosModule {}