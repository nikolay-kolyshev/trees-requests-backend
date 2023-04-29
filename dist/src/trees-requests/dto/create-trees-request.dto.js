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
exports.CreateTreesRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateTreesRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'name' }),
    __metadata("design:type", String)
], CreateTreesRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'description' }),
    __metadata("design:type", String)
], CreateTreesRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'coordinatesAccuracy' }),
    __metadata("design:type", String)
], CreateTreesRequestDto.prototype, "coordinatesAccuracy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'coordinatesLatitude' }),
    __metadata("design:type", String)
], CreateTreesRequestDto.prototype, "coordinatesLatitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'coordinatesLongitude' }),
    __metadata("design:type", String)
], CreateTreesRequestDto.prototype, "coordinatesLongitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'image' }),
    __metadata("design:type", Object)
], CreateTreesRequestDto.prototype, "image", void 0);
exports.CreateTreesRequestDto = CreateTreesRequestDto;
//# sourceMappingURL=create-trees-request.dto.js.map