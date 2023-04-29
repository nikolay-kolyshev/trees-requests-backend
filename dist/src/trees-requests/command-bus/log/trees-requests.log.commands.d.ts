import { ICommand } from '@nestjs/cqrs';
import { CreateTreesRequestDto } from '@/trees-requests/dto/create-trees-request.dto';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
export declare class CreateTreesRequestLogCommand implements ICommand {
    readonly dto: CreateTreesRequestDto;
    constructor(dto: CreateTreesRequestDto);
}
export declare class CreateTreesRequestSuccessLogCommand implements ICommand {
    readonly treesRequest: TreesRequestEntity;
    constructor(treesRequest: TreesRequestEntity);
}
export declare class CreateTreesRequestFailLogCommand implements ICommand {
    readonly dto: CreateTreesRequestDto;
    readonly error: any;
    constructor(dto: CreateTreesRequestDto, error: any);
}
export declare class DeleteTreesRequestByIdLogCommand implements ICommand {
    readonly id: number;
    constructor(id: number);
}
export declare class DeleteTreesRequestByIdSuccessLogCommand implements ICommand {
    readonly id: number;
    constructor(id: number);
}
export declare class DeleteTreesRequestByIdFailLogCommand implements ICommand {
    readonly id: number;
    readonly error: any;
    constructor(id: number, error: any);
}
export declare const TreesRequestsLogCommands: {
    CreateTreesRequestLogCommand: typeof CreateTreesRequestLogCommand;
    CreateTreesRequestSuccessLogCommand: typeof CreateTreesRequestSuccessLogCommand;
    CreateTreesRequestFailLogCommand: typeof CreateTreesRequestFailLogCommand;
    DeleteTreesRequestByIdLogCommand: typeof DeleteTreesRequestByIdLogCommand;
    DeleteTreesRequestByIdSuccessLogCommand: typeof DeleteTreesRequestByIdSuccessLogCommand;
    DeleteTreesRequestByIdFailLogCommand: typeof DeleteTreesRequestByIdFailLogCommand;
};
