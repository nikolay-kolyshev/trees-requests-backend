import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import {
  CreateTreesRequestCommand,
  DeleteTreesRequestByIdCommand,
} from './trees-requests.commands';
import { TreesRequestEntity } from '../entities/trees-request.entity';
import { TreesRequestsCommandRepository } from '../repositories/trees-requests.command-repository';
import {
  CreateTreesRequestEvent,
  CreateTreesRequestFailEvent,
  CreateTreesRequestSuccessEvent,
  DeleteTreesRequestByIdEvent,
  DeleteTreesRequestByIdFailEvent,
  DeleteTreesRequestByIdSuccessEvent,
} from '../event-bus/trees-requests.events';
import { InternalServerErrorException } from '@nestjs/common';

@CommandHandler(CreateTreesRequestCommand)
class CreateTreesRequestCommandHandler
  implements ICommandHandler<CreateTreesRequestCommand, TreesRequestEntity>
{
  constructor(
    private readonly treesRequestsCommandRepository: TreesRequestsCommandRepository,
    private readonly eventBus: EventBus,
  ) {}

  public async execute(
    command: CreateTreesRequestCommand,
  ): Promise<TreesRequestEntity> {
    try {
      this.eventBus.publish(new CreateTreesRequestEvent(command.dto));
      const treesRequest = await this.treesRequestsCommandRepository.create(
        command.dto,
      );
      this.eventBus.publish(new CreateTreesRequestSuccessEvent(treesRequest));
      return treesRequest;
    } catch (err) {
      this.eventBus.publish(new CreateTreesRequestFailEvent(command.dto, err));
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
      this.eventBus.publish(new DeleteTreesRequestByIdEvent(command.id));
      await this.treesRequestsCommandRepository.deleteById(command.id);
      this.eventBus.publish(new DeleteTreesRequestByIdSuccessEvent(command.id));
    } catch (err) {
      this.eventBus.publish(
        new DeleteTreesRequestByIdFailEvent(command.id, err),
      );
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
