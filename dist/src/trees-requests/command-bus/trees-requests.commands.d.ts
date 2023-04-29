import { CreateTreesRequestDto } from '@/trees-requests/dto/create-trees-request.dto';
import { ICommand } from '@nestjs/cqrs';
export declare class CreateTreesRequestCommand implements ICommand {
    readonly dto: CreateTreesRequestDto;
    constructor(dto: CreateTreesRequestDto);
}
export declare class DeleteTreesRequestByIdCommand implements ICommand {
    readonly id: number;
    constructor(id: number);
}
export declare const TreesRequestsCommands: {
    CreateTreesRequestCommand: typeof CreateTreesRequestCommand;
    DeleteTreesRequestByIdCommand: typeof DeleteTreesRequestByIdCommand;
};
