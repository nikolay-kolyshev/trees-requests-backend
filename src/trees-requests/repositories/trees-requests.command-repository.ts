import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TreesRequestEntity } from '../entities/trees-request.entity';
import { ImageEntity } from '../../images/entities/image.entity';
import { CreateTreesRequestDto } from '../dto/create-trees-request.dto';

@Injectable()
export class TreesRequestsCommandRepository {
  constructor(
    @InjectRepository(TreesRequestEntity)
    private treesRequestsRepository: Repository<TreesRequestEntity>,
    @InjectRepository(ImageEntity)
    private imagesEntityRepository: Repository<ImageEntity>,
  ) {}

  async create(dto: CreateTreesRequestDto) {
    const treesRequest = await this.treesRequestsRepository.create({
      name: dto.name,
      description: dto.description,
      coordinatesAccuracy: dto.coordinatesAccuracy,
      coordinatesLatitude: dto.coordinatesLatitude,
      coordinatesLongitude: dto.coordinatesLongitude,
    });
    treesRequest.image = await this.imagesEntityRepository.create({
      name: dto.image.originalname,
      data: dto.image.buffer,
    });
    return await this.treesRequestsRepository.save(treesRequest);
  }

  async deleteById(id: number) {
    await this.treesRequestsRepository.delete({ id });
  }
}
