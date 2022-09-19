import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostGisBackendService } from './post-gis-backend.service';
import { CreatePostGisBackendDto } from './dto/create-post-gis-backend.dto';
import { UpdatePostGisBackendDto } from './dto/update-post-gis-backend.dto';
@Controller('post-gis-backend')
export class PostGisBackendController {
  constructor(private readonly postGisBackendService: PostGisBackendService) {}

  @Get()
  findAll() {
    return this.postGisBackendService.findAll();
  }

  // @Post()
  // create(@Body() createPostGisBackendDto: CreatePostGisBackendDto) {
  //   return this.postGisBackendService.create(createPostGisBackendDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postGisBackendService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostGisBackendDto: UpdatePostGisBackendDto) {
  //   return this.postGisBackendService.update(+id, updatePostGisBackendDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postGisBackendService.remove(+id);
  // }
}
