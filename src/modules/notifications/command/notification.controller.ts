import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { NotificationCreateCommand } from './impl/notification-create-command';

@Controller('notification')
export default class NotificationController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/create')
  createNotification() {
    return this.commandBus.execute(
      new NotificationCreateCommand('pooria', 'Sended message!'),
    );
  }
}
