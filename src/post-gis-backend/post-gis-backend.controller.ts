import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { PostGisBackendService } from './post-gis-backend.service';
import { CreatePostGisBackendDto } from './dto/create-post-gis-backend.dto';
import { UpdatePostGisBackendDto } from './dto/update-post-gis-backend.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { readFileSync } from 'fs';
import { parse } from 'papaparse';

@Controller('post-gis-backend')
export class PostGisBackendController {
  constructor(private readonly postGisBackendService: PostGisBackendService) {}

  // @Post()
  // create(@Body() createPostGisBackendDto: CreatePostGisBackendDto) {
  //   return 'hello';
  //   // return this.postGisBackendService.create(createPostGisBackendDto);
  // }

  @Get()
  findAll() {
    return this.postGisBackendService.findAll();
  }

  async uploadFile() {
    const csvFile = readFileSync('files/1.csv');
    const csvData = csvFile.toString();
    const parsedCsv = await parse(csvData, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data,
    });
    console.log(parsedCsv);
    console.log('parsedCsv', parsedCsv.data);
    const add = {
      latitude: parsedCsv.data[0].latitude,
      longitude: parsedCsv.data[0].longitude,
      cityname: parsedCsv.data[0].cityname,

    };
    console.log('Data: ', add);

    return this.postGisBackendService.create(add);


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
}
