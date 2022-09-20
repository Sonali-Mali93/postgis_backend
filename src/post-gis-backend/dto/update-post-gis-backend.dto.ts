import { PartialType } from '@nestjs/mapped-types';
import { CreatePostGisBackendDto } from './create-post-gis-backend.dto';

export class UpdatePostGisBackendDto extends PartialType(
  CreatePostGisBackendDto,
) {}
