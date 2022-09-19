import { Module } from '@nestjs/common';
import { PostGisBackendService } from './post-gis-backend.service';
import { PostGisBackendController } from './post-gis-backend.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostGisBackend } from './entities/post-gis-backend.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostGisBackend])
  ],
  controllers: [PostGisBackendController],
  providers: [PostGisBackendService]
})
export class PostGisBackendModule {}
