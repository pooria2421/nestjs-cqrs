import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateVideoProcessThumnailCommand } from '../impl/video-process.thumbnail.command';
import NotificationService from 'src/modules/notifications/notifications.service';

@CommandHandler(CreateVideoProcessThumnailCommand)
export default class VideoProcessThumbnailHandler
  implements ICommandHandler<CreateVideoProcessThumnailCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly notificationService: NotificationService,
  ) {}
  async execute(command: CreateVideoProcessThumnailCommand): Promise<any> {
    console.log('generating thumbnail...');
    console.log('success!');
    this.notificationService.sendNotif('');
  }
}
