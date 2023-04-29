import { Module } from '@nestjs/common';
import { TreesRequestsService } from './trees-requests.service';
import { TreesRequestsController } from './trees-requests.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreesRequestEntity } from './entities/trees-request.entity';
import { ImageEntity } from '../images/entities/image.entity';
import { ImagesModule } from '../images/images.module';
import { TreesRequestsSagas } from './event-bus/trees-requests.sagas';
import { TreesRequestsQueryRepository } from './repositories/trees-requests.query-repository';
import { TreesRequestsCommandRepository } from './repositories/trees-requests.command-repository';
import { mapDependencyObjectsToModuleProviders } from '../common/helpers/map-dependency-objects-to-module.providers.helper';
import { TreesRequestsQueriesHandlers } from './query-bus/trees-requests.queries-handlers';
import { TreesRequestsQueries } from './query-bus/trees-requests.queries';
import { TreesRequestsCommands } from './command-bus/trees-requests.commands';
import { TreesRequestsEvents } from './event-bus/trees-requests.events';
import { TreesRequestsLogCommands } from './command-bus/log/trees-requests.log.commands';
import { TreesRequestsCommandLogHandlers } from './command-bus/log/trees-requests.log.command-handlers';
import { TreesRequestsCommandHandlers } from './command-bus/trees-requests.command-handlers';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([TreesRequestEntity]),
    TypeOrmModule.forFeature([ImageEntity]),
    ImagesModule,
  ],
  providers: [
    TreesRequestsService,
    TreesRequestsSagas,
    TreesRequestsQueryRepository,
    TreesRequestsCommandRepository,
    ...mapDependencyObjectsToModuleProviders([
      TreesRequestsQueries,
      TreesRequestsQueriesHandlers,
      TreesRequestsCommands,
      TreesRequestsCommandHandlers,
      TreesRequestsQueries,
      TreesRequestsEvents,
      TreesRequestsLogCommands,
      TreesRequestsCommandLogHandlers,
    ]),
  ],
  controllers: [TreesRequestsController],
})
export class TreesRequestsModule {}
