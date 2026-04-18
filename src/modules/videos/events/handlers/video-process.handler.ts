import { EventBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler()
export class VideoProcessEventHandler implements IEventHandler<any> {
  handle(event: any) {
    console.log('Video process event received', event);
  }
}