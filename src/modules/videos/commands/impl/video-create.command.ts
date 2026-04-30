import { NotFoundException } from '@nestjs/common';
import { CreateVideoInterface } from '../../domain/interfaces/create-video.interface';

export class VideoCreateCommand {
  constructor(public readonly videoInput: CreateVideoInterface) {
    if (!videoInput.title) {
      throw new NotFoundException('Title not found');
    }
  }
}
