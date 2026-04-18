import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateVideoCommand } from './commands/impl/create-video.command';
import { GetVideoQuery } from './queries/impl/get-video.query';

@Controller('videos')
export class VideosController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.commandBus.execute(
      new CreateVideoCommand(body.filePath, body.userId),
    );
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.queryBus.execute(new GetVideoQuery(id));
  }
}