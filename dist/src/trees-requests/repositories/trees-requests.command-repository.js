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
exports.TreesRequestsCommandRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const trees_request_entity_1 = require("../entities/trees-request.entity");
const image_entity_1 = require("../../images/entities/image.entity");
let TreesRequestsCommandRepository = class TreesRequestsCommandRepository {
    constructor(treesRequestsRepository, imagesEntityRepository) {
        this.treesRequestsRepository = treesRequestsRepository;
        this.imagesEntityRepository = imagesEntityRepository;
    }
    async create(dto) {
        const treesRequest = await this.treesRequestsRepository.create({
            name: dto.name,
            description: dto.description,
            coordinatesAccuracy: dto.coordinatesAccuracy,
            coordinatesLatitude: dto.coordinatesLatitude,
            coordinatesLongitude: dto.coordinatesLongitude,
        });
        treesRequest.image = await this.imagesEntityRepository.create({
            name: dto.image.originalname,
            data: dto.image.buffer,
        });
        return await this.treesRequestsRepository.save(treesRequest);
    }
    async deleteById(id) {
        await this.treesRequestsRepository.delete({ id });
    }
};
TreesRequestsCommandRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trees_request_entity_1.TreesRequestEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(image_entity_1.ImageEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TreesRequestsCommandRepository);
exports.TreesRequestsCommandRepository = TreesRequestsCommandRepository;
//# sourceMappingURL=trees-requests.command-repository.js.map