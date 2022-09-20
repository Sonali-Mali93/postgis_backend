import { Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { Point } from 'geojson';
export class CreatePostGisBackendDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', default: '' })
  latitude: number;

  @Column({ type: 'decimal', default: '' })
  longitude: number;

  @Column({ nullable: true })
  cityname: string;

  @Index({ spatial: true })
  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  geography: Point;
}
