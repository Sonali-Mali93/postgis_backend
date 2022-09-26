import { Module } from '@nestjs/common';
import { PostGisBackendService } from './post-gis-backend.service';
import { PostGisBackendController } from './post-gis-backend.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostGisBackend } from './entities/post-gis-backend.entity';
import { Parcel } from './entities/polygon.entity';
import { linestringentity } from './entities/linestring.entity';
// import { polygonEntity } from './entities/polygon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostGisBackend, Parcel, linestringentity]),
  ],
  controllers: [PostGisBackendController],
  providers: [PostGisBackendService],
})
export class PostGisBackendModule {}
