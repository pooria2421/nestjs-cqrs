import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { VideoCreateCommand } from '../impl/video-create.command';
import { VideoCreatedEvent } from '../../events/impl/video-created.event';
import { InjectModel } from '@nestjs/mongoose';
import { Video, VideoDocument } from '../../domain/schema/video-schema';

@CommandHandler(VideoCreateCommand)
export class CreateVideoHandler implements ICommandHandler<VideoCreateCommand> {
  constructor(
    private eventBus: EventBus,

    @InjectModel(Video.name)
    private readonly videoRepository: VideoDocument,
  ) {}

  async execute(command: VideoCreateCommand) {
    const video = await (
      await this.videoRepository.create(command.videoInput)
    ).save();
    console.log(command, video);
    this.eventBus.publish(new VideoCreatedEvent(video.id));

    return video;
  }
}
