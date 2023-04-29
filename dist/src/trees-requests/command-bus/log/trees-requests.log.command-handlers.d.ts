import { ICommandHandler } from '@nestjs/cqrs';
import { LoggerService } from '@/common/logger/logger.service';
import { CreateTreesRequestFailLogCommand, CreateTreesRequestLogCommand, CreateTreesRequestSuccessLogCommand, DeleteTreesRequestByIdFailLogCommand, DeleteTreesRequestByIdLogCommand, DeleteTreesRequestByIdSuccessLogCommand } from '@/trees-requests/command-bus/log/trees-requests.log.commands';
declare class CreateTreesRequestLogCommandHandler implements ICommandHandler<CreateTreesRequestLogCommand, void> {
    private readonly logger;
    constructor(logger: LoggerService);
    execute(command: CreateTreesRequestLogCommand): Promise<void>;
}
declare class CreateTreesRequestSuccessLogCommandHandler implements ICommandHandler<CreateTreesRequestSuccessLogCommand, void> {
    private readonly logger;
    constructor(logger: LoggerService);
    execute(command: CreateTreesRequestSuccessLogCommand): Promise<void>;
}
declare class CreateTreesRequestFailLogCommandHandler implements ICommandHandler<CreateTreesRequestFailLogCommand, void> {
    private readonly logger;
    constructor(logger: LoggerService);
    execute(command: CreateTreesRequestFailLogCommand): Promise<void>;
}
declare class DeleteTreesRequestByIdLogCommandHandler implements ICommandHandler<DeleteTreesRequestByIdLogCommand, void> {
    private readonly logger;
    constructor(logger: LoggerService);
    execute(command: DeleteTreesRequestByIdLogCommand): Promise<void>;
}
declare class DeleteTreesRequestByIdSuccessLogCommandHandler implements ICommandHandler<DeleteTreesRequestByIdSuccessLogCommand, void> {
    private readonly logger;
    constructor(logger: LoggerService);
    execute(command: DeleteTreesRequestByIdSuccessLogCommand): Promise<void>;
}
declare class DeleteTreesRequestByIdFailLogCommandHandler implements ICommandHandler<DeleteTreesRequestByIdFailLogCommand, void> {
    private readonly logger;
    constructor(logger: LoggerService);
    execute(command: DeleteTreesRequestByIdFailLogCommand): Promise<void>;
}
export declare const TreesRequestsCommandLogHandlers: {
    CreateTreesRequestLogCommandHandler: typeof CreateTreesRequestLogCommandHandler;
    CreateTreesRequestSuccessLogCommandHandler: typeof CreateTreesRequestSuccessLogCommandHandler;
    CreateTreesRequestFailLogCommandHandler: typeof CreateTreesRequestFailLogCommandHandler;
    DeleteTreesRequestByIdLogCommandHandler: typeof DeleteTreesRequestByIdLogCommandHandler;
    DeleteTreesRequestByIdSuccessLogCommandHandler: typeof DeleteTreesRequestByIdSuccessLogCommandHandler;
    DeleteTreesRequestByIdFailLogCommandHandler: typeof DeleteTreesRequestByIdFailLogCommandHandler;
};
export {};
