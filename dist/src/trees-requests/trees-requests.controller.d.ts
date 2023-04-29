/// <reference types="multer" />
import { HttpStatus } from '@nestjs/common';
import { TreesRequestsService } from '@/trees-requests/trees-requests.service';
import { CreateTreesRequestDto } from '@/trees-requests/dto/create-trees-request.dto';
export declare class TreesRequestsController {
    private treesRequestsService;
    constructor(treesRequestsService: TreesRequestsService);
    getAllTreesRequests(): Promise<any>;
    getTreesRequestById(id: any): Promise<any>;
    createTreesRequest(dto: CreateTreesRequestDto, image: Express.Multer.File): Promise<{
        status: HttpStatus;
    }>;
    deleteTreesRequestById(id: number): Promise<void>;
}
