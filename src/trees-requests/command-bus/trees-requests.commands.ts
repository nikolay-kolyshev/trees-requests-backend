import { CreateTreesRequestDto } from '../dto/create-trees-request.dto';
import { ICommand } from '@nestjs/cqrs';

export class CreateTreesRequestCommand implements ICommand {
  constructor(public readonly dto: CreateTreesRequestDto) {}
}

export class DeleteTreesRequestByIdCommand implements ICommand {
  constructor(public readonly id: number) {}
}

export const TreesRequestsCommands = {
  CreateTreesRequestCommand,
  DeleteTreesRequestByIdCommand,
};
