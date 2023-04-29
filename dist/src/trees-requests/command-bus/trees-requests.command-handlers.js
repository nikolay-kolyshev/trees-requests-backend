"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsCommandHandlers = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const trees_requests_commands_1 = require("./trees-requests.commands");
const common_1 = require("@nestjs/common");
const trees_requests_command_repository_1 = require("../repositories/trees-requests.command-repository");
const trees_requests_events_1 = require("../event-bus/trees-requests.events");
let CreateTreesRequestCommandHandler = class CreateTreesRequestCommandHandler {
    constructor(treesRequestsCommandRepository, eventBus) {
        this.treesRequestsCommandRepository = treesRequestsCommandRepository;
        this.eventBus = eventBus;
    }
    async execute(command) {
        try {
            this.eventBus.publish(new trees_requests_events_1.CreateTreesRequestEvent(command.dto));
            const treesRequest = await this.treesRequestsCommandRepository.create(command.dto);
            this.eventBus.publish(new trees_requests_events_1.CreateTreesRequestSuccessEvent(treesRequest));
            return treesRequest;
        }
        catch (err) {
            this.eventBus.publish(new trees_requests_events_1.CreateTreesRequestFailEvent(command.dto, err));
            throw new common_1.InternalServerErrorException('Внутренняя серверная ошибка при создании запроса на спасение дерева');
        }
    }
};
CreateTreesRequestCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_commands_1.CreateTreesRequestCommand),
    __metadata("design:paramtypes", [trees_requests_command_repository_1.TreesRequestsCommandRepository,
        cqrs_1.EventBus])
], CreateTreesRequestCommandHandler);
let DeleteTreesRequestByIdCommandHandler = class DeleteTreesRequestByIdCommandHandler {
    constructor(treesRequestsCommandRepository, eventBus) {
        this.treesRequestsCommandRepository = treesRequestsCommandRepository;
        this.eventBus = eventBus;
    }
    async execute(command) {
        try {
            this.eventBus.publish(new trees_requests_events_1.DeleteTreesRequestByIdEvent(command.id));
            await this.treesRequestsCommandRepository.deleteById(command.id);
            this.eventBus.publish(new trees_requests_events_1.DeleteTreesRequestByIdSuccessEvent(command.id));
        }
        catch (err) {
            this.eventBus.publish(new trees_requests_events_1.DeleteTreesRequestByIdFailEvent(command.id, err));
            throw new common_1.InternalServerErrorException('Внутренняя серверная ошибка при удалении запроса на спасение дерева');
        }
    }
};
DeleteTreesRequestByIdCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_commands_1.DeleteTreesRequestByIdCommand),
    __metadata("design:paramtypes", [trees_requests_command_repository_1.TreesRequestsCommandRepository,
        cqrs_1.EventBus])
], DeleteTreesRequestByIdCommandHandler);
exports.TreesRequestsCommandHandlers = {
    CreateTreesRequestCommandHandler,
    DeleteTreesRequestByIdCommandHandler,
};
//# sourceMappingURL=trees-requests.command-handlers.js.map