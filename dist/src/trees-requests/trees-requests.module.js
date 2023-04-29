"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsModule = void 0;
const common_1 = require("@nestjs/common");
const trees_requests_service_1 = require("./trees-requests.service");
const trees_requests_controller_1 = require("./trees-requests.controller");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const map_dependency_objects_to_module_providers_helper_1 = require("../common/helpers/map-dependency-objects-to-module.providers.helper");
const trees_requests_sagas_1 = require("./event-bus/trees-requests.sagas");
const trees_requests_queries_1 = require("./query-bus/trees-requests.queries");
const trees_requests_commands_1 = require("./command-bus/trees-requests.commands");
const trees_requests_events_1 = require("./event-bus/trees-requests.events");
const trees_requests_log_commands_1 = require("./command-bus/log/trees-requests.log.commands");
const trees_requests_log_command_handlers_1 = require("./command-bus/log/trees-requests.log.command-handlers");
const trees_request_entity_1 = require("./entities/trees-request.entity");
const trees_requests_query_repository_1 = require("./repositories/trees-requests.query-repository");
const trees_requests_command_repository_1 = require("./repositories/trees-requests.command-repository");
const trees_requests_command_handlers_1 = require("./command-bus/trees-requests.command-handlers");
const trees_requests_queries_handlers_1 = require("./query-bus/trees-requests.queries-handlers");
const images_module_1 = require("../images/images.module");
const image_entity_1 = require("../images/entities/image.entity");
let TreesRequestsModule = class TreesRequestsModule {
};
TreesRequestsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([trees_request_entity_1.TreesRequestEntity]),
            typeorm_1.TypeOrmModule.forFeature([image_entity_1.ImageEntity]),
            images_module_1.ImagesModule,
        ],
        providers: [
            trees_requests_service_1.TreesRequestsService,
            trees_requests_sagas_1.TreesRequestsSagas,
            trees_requests_query_repository_1.TreesRequestsQueryRepository,
            trees_requests_command_repository_1.TreesRequestsCommandRepository,
            ...(0, map_dependency_objects_to_module_providers_helper_1.mapDependencyObjectsToModuleProviders)([
                trees_requests_queries_1.TreesRequestsQueries,
                trees_requests_queries_handlers_1.TreesRequestsQueriesHandlers,
                trees_requests_commands_1.TreesRequestsCommands,
                trees_requests_command_handlers_1.TreesRequestsCommandHandlers,
                trees_requests_queries_1.TreesRequestsQueries,
                trees_requests_events_1.TreesRequestsEvents,
                trees_requests_log_commands_1.TreesRequestsLogCommands,
                trees_requests_log_command_handlers_1.TreesRequestsCommandLogHandlers,
            ]),
        ],
        controllers: [trees_requests_controller_1.TreesRequestsController],
    })
], TreesRequestsModule);
exports.TreesRequestsModule = TreesRequestsModule;
//# sourceMappingURL=trees-requests.module.js.map