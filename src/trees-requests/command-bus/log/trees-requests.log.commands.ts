import { ICommand } from '@nestjs/cqrs';
import { CreateTreesRequestDto } from '../../dto/create-trees-request.dto';
import { TreesRequestEntity } from '../../entities/trees-request.entity';

export class CreateTreesRequestLogCommand implements ICommand {
  constructor(public readonly dto: CreateTreesRequestDto) {}
}

export class CreateTreesRequestSuccessLogCommand implements ICommand {
  constructor(public readonly treesRequest: TreesRequestEntity) {}
}

export class CreateTreesRequestFailLogCommand implements ICommand {
  constructor(
    public readonly dto: CreateTreesRequestDto,
    public readonly error: any,
  ) {}
}

export class DeleteTreesRequestByIdLogCommand implements ICommand {
  constructor(public readonly id: number) {}
}

export class DeleteTreesRequestByIdSuccessLogCommand implements ICommand {
  constructor(public readonly id: number) {}
}

export class DeleteTreesRequestByIdFailLogCommand implements ICommand {
  constructor(public readonly id: number, public readonly error: any) {}
}

export const TreesRequestsLogCommands = {
  CreateTreesRequestLogCommand,
  CreateTreesRequestSuccessLogCommand,
  CreateTreesRequestFailLogCommand,
  DeleteTreesRequestByIdLogCommand,
  DeleteTreesRequestByIdSuccessLogCommand,
  DeleteTreesRequestByIdFailLogCommand,
};
