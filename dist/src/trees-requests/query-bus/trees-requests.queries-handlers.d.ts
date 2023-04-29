import { IQueryHandler } from '@nestjs/cqrs';
import { GetAllTreesRequestsQuery, GetTreesRequestByIdQuery } from '@/trees-requests/query-bus/trees-requests.queries';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
import { TreesRequestsQueryRepository } from '@/trees-requests/repositories/trees-requests.query-repository';
import { TreesRequestsView } from '@/trees-requests/views/trees-requests.view';
declare class GetAllCitiesQueryHandler implements IQueryHandler<GetAllTreesRequestsQuery, TreesRequestsView[]> {
    private readonly treesRequestsQueryRepository;
    constructor(treesRequestsQueryRepository: TreesRequestsQueryRepository);
    execute(): Promise<TreesRequestsView[]>;
}
declare class GetCityByIdQueryHandler implements IQueryHandler<GetTreesRequestByIdQuery, TreesRequestEntity> {
    private readonly treesRequestsQueryRepository;
    constructor(treesRequestsQueryRepository: TreesRequestsQueryRepository);
    execute(query: GetTreesRequestByIdQuery): Promise<TreesRequestEntity>;
}
export declare const TreesRequestsQueriesHandlers: {
    GetAllCitiesQueryHandler: typeof GetAllCitiesQueryHandler;
    GetCityByIdQueryHandler: typeof GetCityByIdQueryHandler;
};
export {};
