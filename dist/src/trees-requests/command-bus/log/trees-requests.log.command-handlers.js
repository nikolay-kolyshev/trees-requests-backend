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
exports.TreesRequestsCommandLogHandlers = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const logger_service_1 = require("../../../common/logger/logger.service");
const trees_requests_log_commands_1 = require("./trees-requests.log.commands");
const trees_requests_constants_1 = require("../../trees-requests.constants");
let CreateTreesRequestLogCommandHandler = class CreateTreesRequestLogCommandHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.log(`Создан request на создание запроса на спасение дерева ${command.dto.name}`, trees_requests_constants_1.TREES_REQUESTS_LOGGER_CONTEXT_VALUE);
    }
};
CreateTreesRequestLogCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_log_commands_1.CreateTreesRequestLogCommand),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], CreateTreesRequestLogCommandHandler);
let CreateTreesRequestSuccessLogCommandHandler = class CreateTreesRequestSuccessLogCommandHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.success(`Запроса на спасение дерева ${command.treesRequest.name} успешно создан`, trees_requests_constants_1.TREES_REQUESTS_LOGGER_CONTEXT_VALUE);
    }
};
CreateTreesRequestSuccessLogCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_log_commands_1.CreateTreesRequestSuccessLogCommand),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], CreateTreesRequestSuccessLogCommandHandler);
let CreateTreesRequestFailLogCommandHandler = class CreateTreesRequestFailLogCommandHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.error(`Произошла ошибка при создании запроса на спасение дерева ${command.dto.name}! Подробнее: ${command.error}`, '', trees_requests_constants_1.TREES_REQUESTS_LOGGER_CONTEXT_VALUE);
    }
};
CreateTreesRequestFailLogCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_log_commands_1.CreateTreesRequestFailLogCommand),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], CreateTreesRequestFailLogCommandHandler);
let DeleteTreesRequestByIdLogCommandHandler = class DeleteTreesRequestByIdLogCommandHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.log(`Создан новый request на удаление запроса на спасение дерева с id ${command.id}`, trees_requests_constants_1.TREES_REQUESTS_LOGGER_CONTEXT_VALUE);
    }
};
DeleteTreesRequestByIdLogCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_log_commands_1.DeleteTreesRequestByIdLogCommand),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], DeleteTreesRequestByIdLogCommandHandler);
let DeleteTreesRequestByIdSuccessLogCommandHandler = class DeleteTreesRequestByIdSuccessLogCommandHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.success(`Запрос на спасение дерева с id ${command.id} успешно удален`, trees_requests_constants_1.TREES_REQUESTS_LOGGER_CONTEXT_VALUE);
    }
};
DeleteTreesRequestByIdSuccessLogCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_log_commands_1.DeleteTreesRequestByIdSuccessLogCommand),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], DeleteTreesRequestByIdSuccessLogCommandHandler);
let DeleteTreesRequestByIdFailLogCommandHandler = class DeleteTreesRequestByIdFailLogCommandHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async execute(command) {
        this.logger.error(`Произошла ошибка при удалении запроса на спасение дерева c id ${command.id}! Подробнее: ${command.error}`, '', trees_requests_constants_1.TREES_REQUESTS_LOGGER_CONTEXT_VALUE);
    }
};
DeleteTreesRequestByIdFailLogCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(trees_requests_log_commands_1.DeleteTreesRequestByIdFailLogCommand),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], DeleteTreesRequestByIdFailLogCommandHandler);
exports.TreesRequestsCommandLogHandlers = {
    CreateTreesRequestLogCommandHandler,
    CreateTreesRequestSuccessLogCommandHandler,
    CreateTreesRequestFailLogCommandHandler,
    DeleteTreesRequestByIdLogCommandHandler,
    DeleteTreesRequestByIdSuccessLogCommandHandler,
    DeleteTreesRequestByIdFailLogCommandHandler,
};
//# sourceMappingURL=trees-requests.log.command-handlers.js.map