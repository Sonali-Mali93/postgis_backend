import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Parcel } from './entities/polygon.entity';
import { PostGisBackend } from './entities/post-gis-backend.entity';
import { PostGis } from './entities/postgis.interface';
// import { polygonEntity } from './entities/polygon.entity';
@Injectable()
export class PostGisBackendService {
  constructor(
    @InjectRepository(PostGisBackend)
    private readonly PostGisDataRepository: Repository<PostGisBackend>,
    @InjectRepository(Parcel)
    private readonly parcel: Repository<Parcel>,
  ) {}
  create(postGisData: PostGis): Observable<PostGis> {
    return from(this.PostGisDataRepository.save(postGisData));
  }

  findAll() {
    return from(this.PostGisDataRepository.find());
  }


  async createParcel(createParcelPointDto: Parcel): Promise<any> {
    console.log('this is come from dto ', createParcelPointDto);
    const polygon = {
      type: 'polygon',
      coordinates: [createParcelPointDto.coordinates],
      City_Name: createParcelPointDto.cityname,
    };
    console.log('polygon variable data', polygon);
    // const parcel = this.parcel.create({ polygon })
    const parcel = this.parcel.create({
      cityname: createParcelPointDto.cityname,
      polygon,
    });
    console.log(parcel);
    await this.parcel.save(parcel);
    return parcel;
  }
  findAllPolygon() {
    return from(this.parcel.find());
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
