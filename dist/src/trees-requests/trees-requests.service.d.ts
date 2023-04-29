import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTreesRequestDto } from '@/trees-requests/dto/create-trees-request.dto';
import { ImagesService } from '@/images/images.service';
export declare class TreesRequestsService {
    private readonly commandBus;
    private readonly queryBus;
    private readonly imagesService;
    constructor(commandBus: CommandBus, queryBus: QueryBus, imagesService: ImagesService);
    getAllTreesRequests(): Promise<any>;
    getTreesRequestById(id: number): Promise<any>;
    createTreesRequest(dto: CreateTreesRequestDto): Promise<any>;
    deleteTreesRequestById(id: number): Promise<void>;
}
