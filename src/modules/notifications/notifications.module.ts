import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationCreateCommand } from './commands/impl/notification-create-command';
import NotoficationCreateHandler from './commands/handler/notofication-create-handler';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [NotoficationCreateHandler],
})
export class NotificationsModule {}
