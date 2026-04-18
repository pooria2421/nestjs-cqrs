import { Injectable } from '@nestjs/common';
import { Saga, ICommand, ofType } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoCreatedEvent } from '../events/impl/video-created.event';
import { VideoProcessCommand } from '../commands/impl/video-process.command';
import { VideoProcessEventHandler } from '../events/handlers/video-process.handler';
import { VideoProcessEvent } from '../events/impl/video-process.event';
import { CreateVideoProcessThumnailCommand } from '../commands/impl/video-process.thumbnail.command';

@Injectable()
export class VideoSaga {

  // 🎬 1. Upload → Processing
  @Saga()
  uploadFlow = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(VideoCreatedEvent),
      map(event =>
        new VideoProcessCommand(event.videoId),
      ),
    );
  };

  // 🎬 2. Processing → Thumbnail
  @Saga()
  processFlow = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(VideoProcessEvent),

      map(event =>
        new CreateVideoProcessThumnailCommand(event.videoId),
      ),
    );
  };
}