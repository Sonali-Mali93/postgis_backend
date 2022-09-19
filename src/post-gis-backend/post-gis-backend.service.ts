import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreatePostGisBackendDto } from './dto/create-post-gis-backend.dto';
import { UpdatePostGisBackendDto } from './dto/update-post-gis-backend.dto';
import {PostGisBackend} from './entities/post-gis-backend.entity'
import {PostGis} from './entities/postgis.interface'
@Injectable()
export class PostGisBackendService {
  constructor(@InjectRepository(PostGisBackend)
  private readonly PostGisDataRepository: Repository<PostGisBackend>,
  ){}
  // create(postGisData: PostGis): Observable<PostGis> {
  //   return from(this.PostGisDataRepository.save(postGisData));
  // }

  findAll() {
    return from(this.PostGisDataRepository.find());
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} postGisBackend`;
  // }

  // update(id: number, updatePostGisBackendDto: UpdatePostGisBackendDto) {
  //   return `This action updates a #${id} postGisBackend`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} postGisBackend`;
  // }
}
