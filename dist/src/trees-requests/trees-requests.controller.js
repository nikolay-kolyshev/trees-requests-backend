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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreesRequestsController = void 0;
const common_1 = require("@nestjs/common");
const trees_requests_constants_1 = require("./trees-requests.constants");
const trees_requests_service_1 = require("./trees-requests.service");
const swagger_1 = require("@nestjs/swagger");
const create_trees_request_dto_1 = require("./dto/create-trees-request.dto");
const platform_express_1 = require("@nestjs/platform-express");
let TreesRequestsController = class TreesRequestsController {
    constructor(treesRequestsService) {
        this.treesRequestsService = treesRequestsService;
    }
    getAllTreesRequests() {
        return this.treesRequestsService.getAllTreesRequests();
    }
    getTreesRequestById(id) {
        return this.treesRequestsService.getTreesRequestById(id);
    }
    async createTreesRequest(dto, image) {
        await this.treesRequestsService.createTreesRequest(Object.assign(Object.assign({}, dto), { image }));
        return {
            status: common_1.HttpStatus.CREATED,
        };
    }
    async deleteTreesRequestById(id) {
        await this.treesRequestsService.deleteTreesRequestById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все запросы на спасение деревьев' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreesRequestsController.prototype, "getAllTreesRequests", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить город по id' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreesRequestsController.prototype, "getTreesRequestById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создать запрос на спасение дерева' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trees_request_dto_1.CreateTreesRequestDto, Object]),
    __metadata("design:returntype", Promise)
], TreesRequestsController.prototype, "createTreesRequest", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить запрос на спасение дерева по id' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreesRequestsController.prototype, "deleteTreesRequestById", null);
TreesRequestsController = __decorate([
    (0, swagger_1.ApiTags)(trees_requests_constants_1.TRESS_REQUESTS_API_TAG),
    (0, common_1.Controller)(trees_requests_constants_1.TRESS_REQUESTS_API_TAG),
    __metadata("design:paramtypes", [trees_requests_service_1.TreesRequestsService])
], TreesRequestsController);
exports.TreesRequestsController = TreesRequestsController;
//# sourceMappingURL=trees-requests.controller.js.map