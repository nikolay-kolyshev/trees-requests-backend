import { Repository } from 'typeorm';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
import { TreesRequestsView } from '@/trees-requests/views/trees-requests.view';
export declare class TreesRequestsQueryRepository {
    private treesRequestsRepository;
    constructor(treesRequestsRepository: Repository<TreesRequestEntity>);
    findById(id: number): Promise<TreesRequestEntity>;
    findAll(): Promise<TreesRequestsView[]>;
}
