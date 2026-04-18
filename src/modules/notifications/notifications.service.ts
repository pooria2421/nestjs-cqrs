import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { NotificationCreateCommand } from './commands/impl/notification-create-command';

@Injectable()
export default class NotificationService {
  constructor(private readonly commandBus: CommandBus) {}
  sendNotif(command) {
    this.commandBus.execute(new NotificationCreateCommand())
  }
}
