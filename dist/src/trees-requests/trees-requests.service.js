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
exports.TreesRequestsService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const trees_requests_queries_1 = require("./query-bus/trees-requests.queries");
const trees_requests_commands_1 = require("./command-bus/trees-requests.commands");
const images_service_1 = require("../images/images.service");
let TreesRequestsService = class TreesRequestsService {
    constructor(commandBus, queryBus, imagesService) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.imagesService = imagesService;
    }
    async getAllTreesRequests() {
        return await this.queryBus.execute(new trees_requests_queries_1.GetAllTreesRequestsQuery());
    }
    async getTreesRequestById(id) {
        const city = await this.queryBus.execute(new trees_requests_queries_1.GetTreesRequestByIdQuery(id));
        if (!city) {
            throw new common_1.NotFoundException(`Запрос на спасение дерева с id ${id} не найден`);
        }
        return city;
    }
    async createTreesRequest(dto) {
        return await this.commandBus.execute(new trees_requests_commands_1.CreateTreesRequestCommand(dto));
    }
    async deleteTreesRequestById(id) {
        const treesRequest = await this.queryBus.execute(new trees_requests_queries_1.GetTreesRequestByIdQuery(id));
        if (!treesRequest) {
            throw new common_1.BadRequestException(`Запроса на спасение дерева с id ${id} не существует`);
        }
        await this.commandBus.execute(new trees_requests_commands_1.DeleteTreesRequestByIdCommand(id));
    }
};
TreesRequestsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus,
        images_service_1.ImagesService])
], TreesRequestsService);
exports.TreesRequestsService = TreesRequestsService;
//# sourceMappingURL=trees-requests.service.js.map