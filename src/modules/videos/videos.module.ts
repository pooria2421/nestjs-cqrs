import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { VideosController } from './videos.controller';
import { CreateVideoHandler } from './commands/handlers/create-video.handler';
import { GetVideoHandler } from './queries/handlers/get-video.handler';
import { VideoCreatedHandler } from './events/handlers/video-created.handler';

@Module({
  imports: [CqrsModule],
  controllers: [VideosController],
  providers: [CreateVideoHandler, GetVideoHandler, VideoCreatedHandler],
})
export class VideosModule {}