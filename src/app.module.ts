import { Module } from '@nestjs/common';
import { VideosModule } from './modules/videos/videos.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { DatabaseModule } from './shared/databases/mogoose-config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VideosModule,
    NotificationsModule,
    DatabaseModule,
  ],
})
export class AppModule {}
