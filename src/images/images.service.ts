import { Injectable } from '@nestjs/common';
import { CreateImageDto } from '@/images/dto/create-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageEntity } from '@/images/entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imagesRepository: Repository<ImageEntity>,
  ) {}

  async getAllImages(): Promise<ImageEntity[]> {
    return this.imagesRepository.find();
  }

  async getImageById(id: number): Promise<ImageEntity> {
    return this.imagesRepository.findOneBy({ id });
  }

  async createImage(dto: CreateImageDto) {
    const image = await this.imagesRepository.create(dto);
    return await this.imagesRepository.save(image);
  }

  async deleteImageById(id: number) {
    await this.imagesRepository.delete(id);
  }
}
