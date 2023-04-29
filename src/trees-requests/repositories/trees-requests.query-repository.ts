import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TreesRequestsView } from '../views/trees-requests.view';
import { TreesRequestEntity } from '../entities/trees-request.entity';

@Injectable()
export class TreesRequestsQueryRepository {
  constructor(
    @InjectRepository(TreesRequestEntity)
    private treesRequestsRepository: Repository<TreesRequestEntity>,
  ) {}

  async findById(id: number): Promise<TreesRequestEntity> {
    return await this.treesRequestsRepository.findOne({
      where: { id },
      relations: ['image'],
    });
  }

  async findAll(): Promise<TreesRequestsView[]> {
    const tressRequests = await this.treesRequestsRepository.find({
      relations: ['image'],
    });
    if (tressRequests.length) {
      return tressRequests.map(
        (treesRequest) => new TreesRequestsView(treesRequest),
      );
    }
    return [];
  }
}
