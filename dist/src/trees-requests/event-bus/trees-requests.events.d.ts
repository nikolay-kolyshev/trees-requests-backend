import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
import { CreateTreesRequestDto } from '@/trees-requests/dto/create-trees-request.dto';
import { IEvent } from '@nestjs/cqrs';
export declare class CreateTreesRequestEvent implements IEvent {
    readonly dto: CreateTreesRequestDto;
    constructor(dto: CreateTreesRequestDto);
}
export declare class CreateTreesRequestSuccessEvent implements IEvent {
    readonly tressRequest: TreesRequestEntity;
    constructor(tressRequest: TreesRequestEntity);
}
export declare class CreateTreesRequestFailEvent implements IEvent {
    readonly dto: CreateTreesRequestDto;
    readonly error: any;
    constructor(dto: CreateTreesRequestDto, error: any);
}
export declare class DeleteTreesRequestByIdEvent implements IEvent {
    readonly id: number;
    constructor(id: number);
}
export declare class DeleteTreesRequestByIdSuccessEvent implements IEvent {
    readonly id: number;
    constructor(id: number);
}
export declare class DeleteTreesRequestByIdFailEvent implements IEvent {
    readonly id: number;
    readonly error: any;
    constructor(id: number, error: any);
}
export declare const TreesRequestsEvents: {
    CreateTreesRequestEvent: typeof CreateTreesRequestEvent;
    CreateTreesRequestSuccessEvent: typeof CreateTreesRequestSuccessEvent;
    CreateTreesRequestFailEvent: typeof CreateTreesRequestFailEvent;
    DeleteTreesRequestByIdEvent: typeof DeleteTreesRequestByIdEvent;
    DeleteTreesRequestByIdSuccessEvent: typeof DeleteTreesRequestByIdSuccessEvent;
    DeleteTreesRequestByIdFailEvent: typeof DeleteTreesRequestByIdFailEvent;
};
