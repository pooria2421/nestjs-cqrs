import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotificationCreateCommand } from '../impl/notification-create-command';

@CommandHandler(NotificationCreateCommand)
export default class NotoficationCreateHandler
  implements ICommandHandler<NotificationCreateCommand>
{
  async execute(command: NotificationCreateCommand): Promise<any> {
    console.log('Notification created');

    return {
      title: 'title',
      description: 'description',
    };
  }
}
