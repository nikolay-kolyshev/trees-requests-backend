import { ISaga } from '@nestjs/cqrs';
import { CreateTreesRequestEvent, CreateTreesRequestFailEvent, CreateTreesRequestSuccessEvent, DeleteTreesRequestByIdEvent, DeleteTreesRequestByIdFailEvent, DeleteTreesRequestByIdSuccessEvent } from '@/trees-requests/event-bus/trees-requests.events';
import { CreateTreesRequestFailLogCommand, CreateTreesRequestLogCommand, CreateTreesRequestSuccessLogCommand, DeleteTreesRequestByIdFailLogCommand, DeleteTreesRequestByIdLogCommand, DeleteTreesRequestByIdSuccessLogCommand } from '@/trees-requests/command-bus/log/trees-requests.log.commands';
export declare class TreesRequestsSagas {
    createTreesRequest: ISaga<CreateTreesRequestEvent, CreateTreesRequestLogCommand>;
    createTreesRequestSuccess: ISaga<CreateTreesRequestSuccessEvent, CreateTreesRequestSuccessLogCommand>;
    createTreesRequestFail: ISaga<CreateTreesRequestFailEvent, CreateTreesRequestFailLogCommand>;
    deleteTreesRequestById: ISaga<DeleteTreesRequestByIdEvent, DeleteTreesRequestByIdLogCommand>;
    deleteTreesRequestByIdSuccess: ISaga<DeleteTreesRequestByIdSuccessEvent, DeleteTreesRequestByIdSuccessLogCommand>;
    deleteTreesRequestByIdFail: ISaga<DeleteTreesRequestByIdFailEvent, DeleteTreesRequestByIdFailLogCommand>;
}
