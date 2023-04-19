import { Injectable } from '@nestjs/common';
import { ISaga, ofType, Saga } from '@nestjs/cqrs';
import { map } from 'rxjs';
import {
  CreateTreesRequestEvent,
  CreateTreesRequestFailEvent,
  CreateTreesRequestSuccessEvent,
  DeleteTreesRequestByIdEvent,
  DeleteTreesRequestByIdFailEvent,
  DeleteTreesRequestByIdSuccessEvent,
} from '@/trees-requests/event-bus/trees-requests.events';
import {
  CreateTreesRequestFailLogCommand,
  CreateTreesRequestLogCommand,
  CreateTreesRequestSuccessLogCommand,
  DeleteTreesRequestByIdFailLogCommand,
  DeleteTreesRequestByIdLogCommand,
  DeleteTreesRequestByIdSuccessLogCommand,
} from '@/trees-requests/command-bus/log/trees-requests.log.commands';

@Injectable()
export class TreesRequestsSagas {
  @Saga()
  createTreesRequest: ISaga<
    CreateTreesRequestEvent,
    CreateTreesRequestLogCommand
  > = (events$) => {
    return events$.pipe(
      ofType(CreateTreesRequestEvent),
      map((event) => new CreateTreesRequestLogCommand(event.dto)),
    );
  };

  @Saga()
  createTreesRequestSuccess: ISaga<
    CreateTreesRequestSuccessEvent,
    CreateTreesRequestSuccessLogCommand
  > = (events$) => {
    return events$.pipe(
      ofType(CreateTreesRequestSuccessEvent),
      map(
        (event) => new CreateTreesRequestSuccessLogCommand(event.tressRequest),
      ),
    );
  };

  @Saga()
  createTreesRequestFail: ISaga<
    CreateTreesRequestFailEvent,
    CreateTreesRequestFailLogCommand
  > = (events$) => {
    return events$.pipe(
      ofType(CreateTreesRequestFailEvent),
      map(
        (event) => new CreateTreesRequestFailLogCommand(event.dto, event.error),
      ),
    );
  };

  @Saga()
  deleteTreesRequestById: ISaga<
    DeleteTreesRequestByIdEvent,
    DeleteTreesRequestByIdLogCommand
  > = (events$) => {
    return events$.pipe(
      ofType(DeleteTreesRequestByIdEvent),
      map((event) => new DeleteTreesRequestByIdLogCommand(event.id)),
    );
  };

  @Saga()
  deleteTreesRequestByIdSuccess: ISaga<
    DeleteTreesRequestByIdSuccessEvent,
    DeleteTreesRequestByIdSuccessLogCommand
  > = (events$) => {
    return events$.pipe(
      ofType(DeleteTreesRequestByIdSuccessEvent),
      map((event) => new DeleteTreesRequestByIdSuccessLogCommand(event.id)),
    );
  };

  @Saga()
  deleteTreesRequestByIdFail: ISaga<
    DeleteTreesRequestByIdFailEvent,
    DeleteTreesRequestByIdFailLogCommand
  > = (events$) => {
    return events$.pipe(
      ofType(DeleteTreesRequestByIdFailEvent),
      map(
        (event) =>
          new DeleteTreesRequestByIdFailLogCommand(event.id, event.error),
      ),
    );
  };
}
