import { EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateTreesRequestCommand, DeleteTreesRequestByIdCommand } from '@/trees-requests/command-bus/trees-requests.commands';
import { TreesRequestsCommandRepository } from '@/trees-requests/repositories/trees-requests.command-repository';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
declare class CreateTreesRequestCommandHandler implements ICommandHandler<CreateTreesRequestCommand, TreesRequestEntity> {
    private readonly treesRequestsCommandRepository;
    private readonly eventBus;
    constructor(treesRequestsCommandRepository: TreesRequestsCommandRepository, eventBus: EventBus);
    execute(command: CreateTreesRequestCommand): Promise<TreesRequestEntity>;
}
declare class DeleteTreesRequestByIdCommandHandler implements ICommandHandler<DeleteTreesRequestByIdCommand, void> {
    private readonly treesRequestsCommandRepository;
    private readonly eventBus;
    constructor(treesRequestsCommandRepository: TreesRequestsCommandRepository, eventBus: EventBus);
    execute(command: DeleteTreesRequestByIdCommand): Promise<void>;
}
export declare const TreesRequestsCommandHandlers: {
    CreateTreesRequestCommandHandler: typeof CreateTreesRequestCommandHandler;
    DeleteTreesRequestByIdCommandHandler: typeof DeleteTreesRequestByIdCommandHandler;
};
export {};
