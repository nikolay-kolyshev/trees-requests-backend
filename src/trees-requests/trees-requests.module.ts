import { Module } from '@nestjs/common';
import { TreesRequestsService } from './trees-requests.service';
import { TreesRequestsController } from './trees-requests.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mapDependencyObjectsToModuleProviders } from '@/common/helpers/map-dependency-objects-to-module.providers.helper';
import { TreesRequestsSagas } from '@/trees-requests/event-bus/trees-requests.sagas';
import { TreesRequestsQueries } from '@/trees-requests/query-bus/trees-requests.queries';
import { TreesRequestsCommands } from '@/trees-requests/command-bus/trees-requests.commands';
import { TreesRequestsEvents } from '@/trees-requests/event-bus/trees-requests.events';
import { TreesRequestsLogCommands } from '@/trees-requests/command-bus/log/trees-requests.log.commands';
import { TreesRequestsCommandLogHandlers } from '@/trees-requests/command-bus/log/trees-requests.log.command-handlers';
import { TreesRequestEntity } from '@/trees-requests/entities/trees-request.entity';
import { TreesRequestsQueryRepository } from '@/trees-requests/repositories/trees-requests.query-repository';
import { TreesRequestsCommandRepository } from '@/trees-requests/repositories/trees-requests.command-repository';
import { TreesRequestsCommandHandlers } from '@/trees-requests/command-bus/trees-requests.command-handlers';
import { TreesRequestsQueriesHandlers } from '@/trees-requests/query-bus/trees-requests.queries-handlers';
import { ImagesModule } from '@/images/images.module';
import { ImageEntity } from '@/images/entities/image.entity';

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
