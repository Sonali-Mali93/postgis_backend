import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class CreatePostGisBackendDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  latitude: string;

  @Column({ default: '' })
  longitude: string;

  @Column({ default: '' })
  cityname: string;

  @Column({ default: '' })
  geography: string;
}
