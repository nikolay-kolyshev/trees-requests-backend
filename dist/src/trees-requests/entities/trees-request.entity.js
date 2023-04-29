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
exports.TreesRequestEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/entities/abstract.entity");
const image_entity_1 = require("../../images/entities/image.entity");
let TreesRequestEntity = class TreesRequestEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], TreesRequestEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], TreesRequestEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], TreesRequestEntity.prototype, "coordinatesAccuracy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], TreesRequestEntity.prototype, "coordinatesLatitude", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], TreesRequestEntity.prototype, "coordinatesLongitude", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => image_entity_1.ImageEntity, (image) => image.treesRequest, {
        cascade: true,
    }),
    __metadata("design:type", image_entity_1.ImageEntity)
], TreesRequestEntity.prototype, "image", void 0);
TreesRequestEntity = __decorate([
    (0, typeorm_1.Entity)('trees-request')
], TreesRequestEntity);
exports.TreesRequestEntity = TreesRequestEntity;
//# sourceMappingURL=trees-request.entity.js.map