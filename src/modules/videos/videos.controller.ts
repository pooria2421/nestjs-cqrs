import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetVideoQuery } from './queries/impl/get-video.query';
import { VideoCreateCommand } from './commands/impl/video-create.command';

@Controller('videos')
export class VideosController {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  @Post()
  create(@Body() body: any) {
    return this.commandBus.execute(
      new VideoCreateCommand(body.filePath, body.userId),
    );
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.queryBus.execute(new GetVideoQuery(id));
  }
}
