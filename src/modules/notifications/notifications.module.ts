import { Module } from '@nestjs/common';
import NotificationController from './commands/notification.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationCreateCommand } from './commands/impl/notification-create-command';
import NotoficationCreateHandler from './commands/handler/notofication-create-handler';

@Module({
  imports: [CqrsModule],
  controllers: [NotificationController],
  providers: [NotoficationCreateHandler],
})
export class NotificationsModule {}
