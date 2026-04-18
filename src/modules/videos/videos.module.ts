import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { VideosController } from './videos.controller';
import { CreateVideoHandler } from './commands/handlers/video-create.handler';
import { GetVideoHandler } from './queries/handlers/get-video.handler';
import { VideoCreatedEventHandler } from './events/handlers/video-created-event.handler';
import { VideoProcessThumbnailEventHandler } from './events/handlers/video-process-thumbnail.handler';
import { VideoProcessEventHandler } from './events/handlers/video-process.handler';
import { VideoSaga } from './saga/videos-process-saga';
import VideoProcessHandler from './commands/handlers/video-process.handler';
import VideoProcessThumbnailHandler from './commands/handlers/video-process.thumbnail.handler';
import { VideoProcessFinalStepEventHandler } from './commands/handlers/video-process-final-step.handler';
import { DatabaseModule } from 'src/shared/databases/mogoose-config';
import { NotificationsModule } from '../notifications/notifications.module';
import NotificationService from '../notifications/notifications.service';

@Module({
  imports: [CqrsModule, DatabaseModule, NotificationsModule],
  controllers: [VideosController],
  providers: [
    CreateVideoHandler,
    GetVideoHandler,
    VideoCreatedEventHandler,
    VideoProcessThumbnailEventHandler,
    VideoProcessEventHandler,
    VideoProcessHandler,
    VideoSaga,
    NotificationService,
    VideoProcessThumbnailHandler,
    VideoProcessFinalStepEventHandler,
  ],
})
export class VideosModule {}
