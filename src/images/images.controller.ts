import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
  StreamableFile,
  Res,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from '@/images/images.service';
import { Readable } from 'stream';
import { Response } from 'express';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @ApiOperation({ summary: 'Получить все изображения' })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  getALllCities() {
    return this.imagesService.getAllImages();
  }

  @ApiOperation({ summary: 'Получить город по id' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async getImageById(
    @Param('id', ParseIntPipe) id: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const file = await this.imagesService.getImageById(id);
    const stream = Readable.from(file.data);
    console.log(`inline; filename="${file.name}"`);
    res.setHeader('Content-Disposition', `inline; filename="${file.name}"`);
    res.setHeader('Content-Type', 'image');
    return new StreamableFile(stream);
  }

  @ApiOperation({ summary: 'Создать изображение' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('image'))
  @Post('/create')
  createImage(@UploadedFile() image: Express.Multer.File) {
    return this.imagesService.createImage({
      name: image.originalname,
      data: image.buffer,
    });
  }

  @ApiOperation({ summary: 'Удалить изображение по id' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  async deleteImageById(@Param('id') id: number) {
    await this.imagesService.deleteImageById(id);
  }
}
