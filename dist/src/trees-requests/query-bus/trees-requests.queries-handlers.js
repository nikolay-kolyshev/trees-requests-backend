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
exports.TreesRequestsQueriesHandlers = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const trees_requests_queries_1 = require("./trees-requests.queries");
const trees_requests_query_repository_1 = require("../repositories/trees-requests.query-repository");
let GetAllCitiesQueryHandler = class GetAllCitiesQueryHandler {
    constructor(treesRequestsQueryRepository) {
        this.treesRequestsQueryRepository = treesRequestsQueryRepository;
    }
    async execute() {
        try {
            return await this.treesRequestsQueryRepository.findAll();
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Внутренняя серверная ошибка при поиске запросов на создание дерева');
        }
    }
};
GetAllCitiesQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(trees_requests_queries_1.GetAllTreesRequestsQuery),
    __metadata("design:paramtypes", [trees_requests_query_repository_1.TreesRequestsQueryRepository])
], GetAllCitiesQueryHandler);
let GetCityByIdQueryHandler = class GetCityByIdQueryHandler {
    constructor(treesRequestsQueryRepository) {
        this.treesRequestsQueryRepository = treesRequestsQueryRepository;
    }
    async execute(query) {
        try {
            return await this.treesRequestsQueryRepository.findById(query.id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Внутренняя серверная ошибка при поиске запроса на спасение дерева по id');
        }
    }
};
GetCityByIdQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(trees_requests_queries_1.GetTreesRequestByIdQuery),
    __metadata("design:paramtypes", [trees_requests_query_repository_1.TreesRequestsQueryRepository])
], GetCityByIdQueryHandler);
exports.TreesRequestsQueriesHandlers = {
    GetAllCitiesQueryHandler,
    GetCityByIdQueryHandler,
};
//# sourceMappingURL=trees-requests.queries-handlers.js.map