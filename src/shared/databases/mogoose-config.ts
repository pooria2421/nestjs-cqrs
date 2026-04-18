import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  GroupModelFactory,
  VideoSchema,
} from 'src/modules/videos/domain/schema/video-schema';

const models = MongooseModule.forFeatureAsync([GroupModelFactory]);

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        autoIndex: true,
        uri: configService.get<string>('DB_MONGO_URL'),
        connectionFactory: (connection) => {
          return connection;
        },
      }),
      inject: [ConfigService],
    }),
    models,
  ],
  exports: [models],
  providers: [],
})
export class DatabaseModule {}
