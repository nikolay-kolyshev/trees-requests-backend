import { IEvent } from '@nestjs/cqrs';
import { CreateTreesRequestDto } from '../dto/create-trees-request.dto';
import { TreesRequestEntity } from '../entities/trees-request.entity';

export class CreateTreesRequestEvent implements IEvent {
  constructor(public readonly dto: CreateTreesRequestDto) {}
}

export class CreateTreesRequestSuccessEvent implements IEvent {
  constructor(public readonly tressRequest: TreesRequestEntity) {}
}

export class CreateTreesRequestFailEvent implements IEvent {
  constructor(
    public readonly dto: CreateTreesRequestDto,
    public readonly error: any,
  ) {}
}

export class DeleteTreesRequestByIdEvent implements IEvent {
  constructor(public readonly id: number) {}
}

export class DeleteTreesRequestByIdSuccessEvent implements IEvent {
  constructor(public readonly id: number) {}
}

export class DeleteTreesRequestByIdFailEvent implements IEvent {
  constructor(public readonly id: number, public readonly error: any) {}
}

export const TreesRequestsEvents = {
  CreateTreesRequestEvent,
  CreateTreesRequestSuccessEvent,
  CreateTreesRequestFailEvent,
  DeleteTreesRequestByIdEvent,
  DeleteTreesRequestByIdSuccessEvent,
  DeleteTreesRequestByIdFailEvent,
};
