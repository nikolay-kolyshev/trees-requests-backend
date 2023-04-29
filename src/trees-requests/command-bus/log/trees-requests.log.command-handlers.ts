import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CreateTreesRequestFailLogCommand,
  CreateTreesRequestLogCommand,
  CreateTreesRequestSuccessLogCommand,
  DeleteTreesRequestByIdFailLogCommand,
  DeleteTreesRequestByIdLogCommand,
  DeleteTreesRequestByIdSuccessLogCommand,
} from './trees-requests.log.commands';
import { TREES_REQUESTS_LOGGER_CONTEXT_VALUE } from '../../trees-requests.constants';
import { LoggerService } from '../../../common/logger/logger.service';

@CommandHandler(CreateTreesRequestLogCommand)
class CreateTreesRequestLogCommandHandler
  implements ICommandHandler<CreateTreesRequestLogCommand, void>
{
  constructor(private readonly logger: LoggerService) {}

  public async execute(command: CreateTreesRequestLogCommand) {
    this.logger.log(
      `Создан request на создание запроса на спасение дерева ${command.dto.name}`,
      TREES_REQUESTS_LOGGER_CONTEXT_VALUE,
    );
  }
}

@CommandHandler(CreateTreesRequestSuccessLogCommand)
class CreateTreesRequestSuccessLogCommandHandler
  implements ICommandHandler<CreateTreesRequestSuccessLogCommand, void>
{
  constructor(private readonly logger: LoggerService) {}

  public async execute(command: CreateTreesRequestSuccessLogCommand) {
    this.logger.success(
      `Запроса на спасение дерева ${command.treesRequest.name} успешно создан`,
      TREES_REQUESTS_LOGGER_CONTEXT_VALUE,
    );
  }
}

@CommandHandler(CreateTreesRequestFailLogCommand)
class CreateTreesRequestFailLogCommandHandler
  implements ICommandHandler<CreateTreesRequestFailLogCommand, void>
{
  constructor(private readonly logger: LoggerService) {}

  public async execute(command: CreateTreesRequestFailLogCommand) {
    this.logger.error(
      `Произошла ошибка при создании запроса на спасение дерева ${command.dto.name}! Подробнее: ${command.error}`,
      '',
      TREES_REQUESTS_LOGGER_CONTEXT_VALUE,
    );
  }
}

@CommandHandler(DeleteTreesRequestByIdLogCommand)
class DeleteTreesRequestByIdLogCommandHandler
  implements ICommandHandler<DeleteTreesRequestByIdLogCommand, void>
{
  constructor(private readonly logger: LoggerService) {}

  public async execute(command: DeleteTreesRequestByIdLogCommand) {
    this.logger.log(
      `Создан новый request на удаление запроса на спасение дерева с id ${command.id}`,
      TREES_REQUESTS_LOGGER_CONTEXT_VALUE,
    );
  }
}

@CommandHandler(DeleteTreesRequestByIdSuccessLogCommand)
class DeleteTreesRequestByIdSuccessLogCommandHandler
  implements ICommandHandler<DeleteTreesRequestByIdSuccessLogCommand, void>
{
  constructor(private readonly logger: LoggerService) {}

  public async execute(command: DeleteTreesRequestByIdSuccessLogCommand) {
    this.logger.success(
      `Запрос на спасение дерева с id ${command.id} успешно удален`,
      TREES_REQUESTS_LOGGER_CONTEXT_VALUE,
    );
  }
}

@CommandHandler(DeleteTreesRequestByIdFailLogCommand)
class DeleteTreesRequestByIdFailLogCommandHandler
  implements ICommandHandler<DeleteTreesRequestByIdFailLogCommand, void>
{
  constructor(private readonly logger: LoggerService) {}

  public async execute(command: DeleteTreesRequestByIdFailLogCommand) {
    this.logger.error(
      `Произошла ошибка при удалении запроса на спасение дерева c id ${command.id}! Подробнее: ${command.error}`,
      '',
      TREES_REQUESTS_LOGGER_CONTEXT_VALUE,
    );
  }
}

export const TreesRequestsCommandLogHandlers = {
  CreateTreesRequestLogCommandHandler,
  CreateTreesRequestSuccessLogCommandHandler,
  CreateTreesRequestFailLogCommandHandler,
  DeleteTreesRequestByIdLogCommandHandler,
  DeleteTreesRequestByIdSuccessLogCommandHandler,
  DeleteTreesRequestByIdFailLogCommandHandler,
};
