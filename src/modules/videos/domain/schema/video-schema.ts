import {
  AsyncModelFactory,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

export type VideoDocument = Model<Video>;

@Schema()
export class Video {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);

export const GroupModelFactory: AsyncModelFactory = {
  name: Video.name,
  useFactory: () => {
    return VideoSchema;
  },
};
