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
exports.TreesRequestsSagas = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const rxjs_1 = require("rxjs");
const trees_requests_events_1 = require("./trees-requests.events");
const trees_requests_log_commands_1 = require("../command-bus/log/trees-requests.log.commands");
let TreesRequestsSagas = class TreesRequestsSagas {
    constructor() {
        this.createTreesRequest = (events$) => {
            return events$.pipe((0, cqrs_1.ofType)(trees_requests_events_1.CreateTreesRequestEvent), (0, rxjs_1.map)((event) => new trees_requests_log_commands_1.CreateTreesRequestLogCommand(event.dto)));
        };
        this.createTreesRequestSuccess = (events$) => {
            return events$.pipe((0, cqrs_1.ofType)(trees_requests_events_1.CreateTreesRequestSuccessEvent), (0, rxjs_1.map)((event) => new trees_requests_log_commands_1.CreateTreesRequestSuccessLogCommand(event.tressRequest)));
        };
        this.createTreesRequestFail = (events$) => {
            return events$.pipe((0, cqrs_1.ofType)(trees_requests_events_1.CreateTreesRequestFailEvent), (0, rxjs_1.map)((event) => new trees_requests_log_commands_1.CreateTreesRequestFailLogCommand(event.dto, event.error)));
        };
        this.deleteTreesRequestById = (events$) => {
            return events$.pipe((0, cqrs_1.ofType)(trees_requests_events_1.DeleteTreesRequestByIdEvent), (0, rxjs_1.map)((event) => new trees_requests_log_commands_1.DeleteTreesRequestByIdLogCommand(event.id)));
        };
        this.deleteTreesRequestByIdSuccess = (events$) => {
            return events$.pipe((0, cqrs_1.ofType)(trees_requests_events_1.DeleteTreesRequestByIdSuccessEvent), (0, rxjs_1.map)((event) => new trees_requests_log_commands_1.DeleteTreesRequestByIdSuccessLogCommand(event.id)));
        };
        this.deleteTreesRequestByIdFail = (events$) => {
            return events$.pipe((0, cqrs_1.ofType)(trees_requests_events_1.DeleteTreesRequestByIdFailEvent), (0, rxjs_1.map)((event) => new trees_requests_log_commands_1.DeleteTreesRequestByIdFailLogCommand(event.id, event.error)));
        };
    }
};
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Function)
], TreesRequestsSagas.prototype, "createTreesRequest", void 0);
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Function)
], TreesRequestsSagas.prototype, "createTreesRequestSuccess", void 0);
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Function)
], TreesRequestsSagas.prototype, "createTreesRequestFail", void 0);
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Function)
], TreesRequestsSagas.prototype, "deleteTreesRequestById", void 0);
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Function)
], TreesRequestsSagas.prototype, "deleteTreesRequestByIdSuccess", void 0);
__decorate([
    (0, cqrs_1.Saga)(),
    __metadata("design:type", Function)
], TreesRequestsSagas.prototype, "deleteTreesRequestByIdFail", void 0);
TreesRequestsSagas = __decorate([
    (0, common_1.Injectable)()
], TreesRequestsSagas);
exports.TreesRequestsSagas = TreesRequestsSagas;
//# sourceMappingURL=trees-requests.sagas.js.map