import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetVideoQuery } from '../impl/get-video.query';

@QueryHandler(GetVideoQuery)
export class GetVideoHandler implements IQueryHandler<GetVideoQuery> {
  async execute(query: GetVideoQuery) {
    return {
      id: query.id,
      title: 'demo video',
    };
  }
}
