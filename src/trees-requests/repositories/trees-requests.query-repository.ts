import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
import { TreesRequestsView } from '@/trees-requests/views/trees-requests.view';

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
