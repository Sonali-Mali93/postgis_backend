import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Polygon } from 'geojson';
//import { IsOptional } from "@nestjs/class-validator"
import { IsOptional } from 'class-validator';
@Entity({ name: 'PolygonTable' })
export class Parcel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '', nullable: true })
  cityname: string;

  @Index({ spatial: true })
  @Column({
    type: 'geography',
    spatialFeatureType: 'Polygon',
    srid: 4326,
    nullable: true,
  })
  polygon: Polygon;

  @IsOptional()
  coordinates?: number[][];
  // coordinates?: number[][]
}
