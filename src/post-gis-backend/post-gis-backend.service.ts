import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { In, Repository } from 'typeorm';
import { linestringentity } from './entities/linestring.entity';
import { Parcel } from './entities/polygon.entity';
import { PostGisBackend } from './entities/post-gis-backend.entity';
import { PostGis } from './entities/postgis.interface';
import { MultiLineString } from 'geojson';

// import { polygonEntity } from './entities/polygon.entity';
@Injectable()
export class PostGisBackendService {
  constructor(
    @InjectRepository(PostGisBackend)
    private readonly PostGisDataRepository: Repository<PostGisBackend>,
    @InjectRepository(Parcel)
    private readonly parcel: Repository<Parcel>,
    @InjectRepository(linestringentity)
    private readonly linestrings: Repository<linestringentity>,
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

  async createLinePoint(
    createLinePointDto: linestringentity,
  ): Promise<linestringentity> {
    console.log('this is come from linestring service ', createLinePointDto);
    const { coordinates } = createLinePointDto;
    const lineString: MultiLineString = {
      type: 'MultiLineString',
      coordinates: [coordinates],
    };
    console.log('line no-73', lineString);
    const line = this.linestrings.create({
      lineString,
      City_Name: createLinePointDto.City_Name,
    });
    await this.linestrings.save(line);
    return line;
  }

  lineString() {
    return from(this.linestrings.find());
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
