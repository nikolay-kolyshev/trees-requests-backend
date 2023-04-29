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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const logger_decorators_1 = require("./logger.decorators");
const colors_1 = __importDefault(require("colors"));
let LoggerService = class LoggerService extends common_1.ConsoleLogger {
    log(message, context, isSuccess) {
        console.info(isSuccess ? '🟢' : '🔵', colors_1.default[isSuccess ? 'bgGreen' : 'bgBlue'].black.italic(this.getWrappedMessage(message)));
    }
    warn(message, context) {
        console.warn('🟡', colors_1.default.bgYellow.black.italic(this.getWrappedMessage(message)));
    }
    error(message, stack, context) {
        console.error('🔴', colors_1.default.bgRed.black.italic(this.getWrappedMessage(message)));
    }
    success(message, context) {
        this.log(message, context, true);
    }
    set globalContext(context) { }
    setContext() { }
    getWrappedMessage(message) {
        return ` -- ${message} -- `;
    }
};
__decorate([
    logger_decorators_1.LogWithContext,
    __param(1, logger_decorators_1.Context),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Boolean]),
    __metadata("design:returntype", void 0)
], LoggerService.prototype, "log", null);
__decorate([
    logger_decorators_1.LogWithContext,
    __param(1, logger_decorators_1.Context),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LoggerService.prototype, "warn", null);
__decorate([
    logger_decorators_1.LogWithContext,
    __param(2, logger_decorators_1.Context),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], LoggerService.prototype, "error", null);
__decorate([
    logger_decorators_1.GlobalContextSetter,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LoggerService.prototype, "globalContext", null);
LoggerService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT })
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map