import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTreesRequestDto } from '@/trees-requests/dto/create-trees-request.dto';
import {
  GetAllTreesRequestsQuery,
  GetTreesRequestByIdQuery,
} from '@/trees-requests/query-bus/trees-requests.queries';
import {
  CreateTreesRequestCommand,
  DeleteTreesRequestByIdCommand,
} from '@/trees-requests/command-bus/trees-requests.commands';
import { ImagesService } from '@/images/images.service';

@Injectable()
export class TreesRequestsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly imagesService: ImagesService,
  ) {}

  async getAllTreesRequests() {
    return await this.queryBus.execute(new GetAllTreesRequestsQuery());
  }

  async getTreesRequestById(id: number) {
    const city = await this.queryBus.execute(new GetTreesRequestByIdQuery(id));
    if (!city) {
      throw new NotFoundException(
        `Запрос на спасение дерева с id ${id} не найден`,
      );
    }
    return city;
  }

  async createTreesRequest(dto: CreateTreesRequestDto) {
    return await this.commandBus.execute(new CreateTreesRequestCommand(dto));
  }

  async deleteTreesRequestById(id: number): Promise<void> {
    const treesRequest = await this.queryBus.execute(
      new GetTreesRequestByIdQuery(id),
    );
    if (!treesRequest) {
      throw new BadRequestException(
        `Запроса на спасение дерева с id ${id} не существует`,
      );
    }
    await this.commandBus.execute(new DeleteTreesRequestByIdCommand(id));
  }
}
