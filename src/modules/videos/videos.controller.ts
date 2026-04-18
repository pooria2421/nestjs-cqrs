import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetVideoQuery } from './queries/impl/get-video.query';
import { VideoCreateCommand } from './commands/impl/video-create.command';
import { CreateVideoDto } from './domain/dto/create-video.dto';

@Controller('videos')
export class VideosController {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  @Post('/')
  create(@Body() body: CreateVideoDto) {
    return this.commandBus.execute(new VideoCreateCommand(body));
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.queryBus.execute(new GetVideoQuery(id));
  }
}
