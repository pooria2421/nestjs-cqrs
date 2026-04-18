import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { VideoProcessCommand } from "../impl/video-process.command";
import { VideoProcessEventHandler } from "../../events/handlers/video-process.handler";
import { VideoProcessEvent } from "../../events/impl/video-process.event";


@CommandHandler(VideoProcessCommand)
export default class CreateVideoProcessHandler implements ICommandHandler<CreateVideoProcessHandler>{
constructor(

    private readonly eventBus : EventBus

){}
async execute(command: CreateVideoProcessHandler): Promise<any> {
    console.log('processing video ...')
   
    const videoId = 21

    // if video processing success
    this.eventBus.publish(new VideoProcessEvent(videoId))
    

}

}