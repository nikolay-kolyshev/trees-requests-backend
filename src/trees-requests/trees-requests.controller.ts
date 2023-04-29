import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { TRESS_REQUESTS_API_TAG } from './trees-requests.constants';
import { TreesRequestsService } from './trees-requests.service';
import { CreateTreesRequestDto } from './dto/create-trees-request.dto';

@ApiTags(TRESS_REQUESTS_API_TAG)
@Controller(TRESS_REQUESTS_API_TAG)
export class TreesRequestsController {
  constructor(private treesRequestsService: TreesRequestsService) {}

  @ApiOperation({ summary: 'Получить все запросы на спасение деревьев' })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  getAllTreesRequests() {
    return this.treesRequestsService.getAllTreesRequests();
  }

  @ApiOperation({ summary: 'Получить город по id' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getTreesRequestById(@Param('id') id) {
    return this.treesRequestsService.getTreesRequestById(id);
  }

  @ApiOperation({ summary: 'Создать запрос на спасение дерева' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('image'))
  @Post('/create')
  async createTreesRequest(
    @Body() dto: CreateTreesRequestDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    await this.treesRequestsService.createTreesRequest({
      ...dto,
      image,
    });
    return {
      status: HttpStatus.CREATED,
    };
  }

  @ApiOperation({ summary: 'Удалить запрос на спасение дерева по id' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  async deleteTreesRequestById(@Param('id') id: number) {
    await this.treesRequestsService.deleteTreesRequestById(id);
  }
}
