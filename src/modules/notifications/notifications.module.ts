import { Module } from '@nestjs/common';
import NotificationController from './command/notification.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationCreateCommand } from './command/impl/notification-create-command';
import NotoficationCreateHandler from './command/handler/notofication-create-handler';

@Module({
    imports : [CqrsModule],
    controllers : [NotificationController],
    providers : [NotoficationCreateHandler]
})
export class NotificationsModule {}