import { CreateVideoInterface } from "../../domain/interfaces/create-video.interface";

export class VideoCreateCommand {
  constructor(
    public readonly videoInput: CreateVideoInterface,
  ) {}
}
