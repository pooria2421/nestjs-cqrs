import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler()
export class VideoProcessThumbnailEventHandler implements IEventHandler<any> {
  handle(event: any) {
    console.log('Video thumbnail created event received', event);
  }
}