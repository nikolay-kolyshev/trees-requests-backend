import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import {
  CreateTreesRequestCommand,
  DeleteTreesRequestByIdCommand,
} from '@/trees-requests/command-bus/trees-requests.commands';
import { InternalServerErrorException } from '@nestjs/common';
import { TreesRequestsCommandRepository } from '@/trees-requests/repositories/trees-requests.command-repository';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';

@CommandHandler(CreateTreesRequestCommand)
class CreateTreesRequestCommandHandler
  implements ICommandHandler<CreateTreesRequestCommand, TreesRequestEntity>
{
  constructor(
    private readonly treesRequestsCommandRepository: TreesRequestsCommandRepository,
  ) {}

  public async execute(
    command: CreateTreesRequestCommand,
  ): Promise<TreesRequestEntity> {
    try {
      const treesRequest = await this.treesRequestsCommandRepository.create(
        command.dto,
      );
      return treesRequest;
    } catch (err) {
      throw new InternalServerErrorException(
        'Внутренняя серверная ошибка при создании запроса на спасение дерева',
      );
    }
  }
}

@CommandHandler(DeleteTreesRequestByIdCommand)
class DeleteTreesRequestByIdCommandHandler
  implements ICommandHandler<DeleteTreesRequestByIdCommand, void>
{
  constructor(
    private readonly treesRequestsCommandRepository: TreesRequestsCommandRepository,
    private readonly eventBus: EventBus,
  ) {}

  public async execute(command: DeleteTreesRequestByIdCommand): Promise<void> {
    try {
      await this.treesRequestsCommandRepository.deleteById(command.id);
    } catch (err) {
      throw new InternalServerErrorException(
        'Внутренняя серверная ошибка при удалении запроса на спасение дерева',
      );
    }
  }
}

export const TreesRequestsCommandHandlers = {
  CreateTreesRequestCommandHandler,
  DeleteTreesRequestByIdCommandHandler,
};
