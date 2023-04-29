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
exports.TreesRequestsQueryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const trees_request_entity_1 = require("../entities/trees-request.entity");
const trees_requests_view_1 = require("../views/trees-requests.view");
let TreesRequestsQueryRepository = class TreesRequestsQueryRepository {
    constructor(treesRequestsRepository) {
        this.treesRequestsRepository = treesRequestsRepository;
    }
    async findById(id) {
        return await this.treesRequestsRepository.findOne({
            where: { id },
            relations: ['image'],
        });
    }
    async findAll() {
        const tressRequests = await this.treesRequestsRepository.find({
            relations: ['image'],
        });
        if (tressRequests.length) {
            return tressRequests.map((treesRequest) => new trees_requests_view_1.TreesRequestsView(treesRequest));
        }
        return [];
    }
};
TreesRequestsQueryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trees_request_entity_1.TreesRequestEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TreesRequestsQueryRepository);
exports.TreesRequestsQueryRepository = TreesRequestsQueryRepository;
//# sourceMappingURL=trees-requests.query-repository.js.map