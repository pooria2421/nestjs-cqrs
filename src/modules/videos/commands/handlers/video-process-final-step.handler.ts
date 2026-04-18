import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler()
export class VideoProcessFinalStepEventHandler implements IEventHandler<any> {
  handle(event: any) {
    console.log('success');
  }
}