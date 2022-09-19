import { Module } from '@nestjs/common';
import { PostgisController } from './controller/postgis.controller';
import { PostgisService } from './service/postgis.service';

@Module({
  controllers: [PostgisController],
  providers: [PostgisService]
})
export class PostGisModule {}
