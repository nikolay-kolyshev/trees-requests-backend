import { Repository } from 'typeorm';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
import { CreateTreesRequestDto } from '@/trees-requests/dto/create-trees-request.dto';
import { ImageEntity } from '@/images/entities/image.entity';
export declare class TreesRequestsCommandRepository {
    private treesRequestsRepository;
    private imagesEntityRepository;
    constructor(treesRequestsRepository: Repository<TreesRequestEntity>, imagesEntityRepository: Repository<ImageEntity>);
    create(dto: CreateTreesRequestDto): Promise<TreesRequestEntity>;
    deleteById(id: number): Promise<void>;
}
