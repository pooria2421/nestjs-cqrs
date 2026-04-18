import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetVideoQuery } from '../impl/get-video.query';
import { InjectModel } from '@nestjs/mongoose';
import { Video, VideoDocument } from '../../domain/schema/video-schema';

@QueryHandler(GetVideoQuery)
export class GetVideoHandler implements IQueryHandler<GetVideoQuery> {
  constructor(
    @InjectModel(Video.name)
    readonly videoRepository: VideoDocument,
  ) {}
  async execute(query: GetVideoQuery) {
    return this.videoRepository.findById(query.id);
  }
}
