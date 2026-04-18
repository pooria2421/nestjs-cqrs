import { Module } from '@nestjs/common';
import { VideosModule } from './modules/videos/videos.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [VideosModule, NotificationsModule],
})
export class AppModule {}
