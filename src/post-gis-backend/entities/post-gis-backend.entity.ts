import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from 'geojson';

@Entity('geographydata')
export class PostGisBackend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', default: null })
  latitude: number;

  @Column({ type: 'decimal', default: null })
  longitude: number;

  @Column({ default: '' })
  cityname: string;

  @Column({ type: 'geography', nullable: true })
  geography: Point;
}
