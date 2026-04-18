import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler()
export class VideoCreatedEventHandler implements IEventHandler<any> {
  handle(event: any) {
    console.log('Video created event received', event);
  }
}