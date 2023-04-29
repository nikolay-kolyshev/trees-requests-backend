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
exports.ImageEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/entities/abstract.entity");
const class_transformer_1 = require("class-transformer");
const trees_request_entity_1 = require("../../trees-requests/entities/trees-request.entity");
let ImageEntity = class ImageEntity extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], ImageEntity.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({
        type: 'bytea',
    }),
    __metadata("design:type", Uint8Array)
], ImageEntity.prototype, "data", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.OneToOne)(() => trees_request_entity_1.TreesRequestEntity, (treeRequest) => treeRequest.image),
    __metadata("design:type", trees_request_entity_1.TreesRequestEntity)
], ImageEntity.prototype, "treesRequest", void 0);
ImageEntity = __decorate([
    (0, typeorm_1.Entity)('image')
], ImageEntity);
exports.ImageEntity = ImageEntity;
//# sourceMappingURL=image.entity.js.map