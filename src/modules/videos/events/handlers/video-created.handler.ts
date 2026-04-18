import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler()
export class VideoCreatedHandler implements IEventHandler<any> {
  handle(event: any) {
    console.log('Video created event received', event);
  }
}