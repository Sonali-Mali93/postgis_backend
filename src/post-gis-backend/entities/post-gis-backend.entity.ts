import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from 'geojson';

@Entity('geographydata')
export class PostGisBackend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', default: null })
  latitude: number;

  @Column({ type: 'decimal', default: null })
  longitude: number;

  @Column({ nullable: true })
  cityname: string;

  @Index({spatial: true})
  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  geography: Point;
}
