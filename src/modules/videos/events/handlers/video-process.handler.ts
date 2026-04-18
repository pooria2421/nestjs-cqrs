import { EventBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler()
export class VideoProcessEventHandler implements IEventHandler<any> {
  handle(event: any) {
  }
}