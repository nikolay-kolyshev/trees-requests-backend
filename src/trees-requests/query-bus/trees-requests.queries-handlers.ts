import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InternalServerErrorException } from '@nestjs/common';
import {
  GetAllTreesRequestsQuery,
  GetTreesRequestByIdQuery,
} from '@/trees-requests/query-bus/trees-requests.queries';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
import { TreesRequestsQueryRepository } from '@/trees-requests/repositories/trees-requests.query-repository';
import { TreesRequestsView } from '@/trees-requests/views/trees-requests.view';

@QueryHandler(GetAllTreesRequestsQuery)
class GetAllCitiesQueryHandler
  implements IQueryHandler<GetAllTreesRequestsQuery, TreesRequestsView[]>
{
  constructor(
    private readonly treesRequestsQueryRepository: TreesRequestsQueryRepository,
  ) {}

  public async execute(): Promise<TreesRequestsView[]> {
    try {
      return await this.treesRequestsQueryRepository.findAll();
    } catch (err) {
      throw new InternalServerErrorException(
        'Внутренняя серверная ошибка при поиске запросов на создание дерева',
      );
    }
  }
}
@QueryHandler(GetTreesRequestByIdQuery)
class GetCityByIdQueryHandler
  implements IQueryHandler<GetTreesRequestByIdQuery, TreesRequestEntity>
{
  constructor(
    private readonly treesRequestsQueryRepository: TreesRequestsQueryRepository,
  ) {}

  public async execute(
    query: GetTreesRequestByIdQuery,
  ): Promise<TreesRequestEntity> {
    try {
      return await this.treesRequestsQueryRepository.findById(query.id);
    } catch (err) {
      throw new InternalServerErrorException(
        'Внутренняя серверная ошибка при поиске запроса на спасение дерева по id',
      );
    }
  }
}

export const TreesRequestsQueriesHandlers = {
  GetAllCitiesQueryHandler,
  GetCityByIdQueryHandler,
};
