"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogWithContext = exports.GlobalContextSetter = exports.Context = void 0;
const logger_symbols_1 = require("./logger.symbols");
const colors_1 = __importDefault(require("colors"));
const Context = (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(logger_symbols_1.CONTEXT_PROPERTY_INDEX_METADATA_KEY, parameterIndex, target);
};
exports.Context = Context;
const GlobalContextSetter = (target, propertyKey, descriptor) => {
    const originalSetter = descriptor.set;
    descriptor.set = async function (context) {
        Reflect.defineMetadata(logger_symbols_1.GLOBAL_CONTEXT_VALUE_METADATA_KEY, context, target);
        originalSetter.call(this, context);
    };
};
exports.GlobalContextSetter = GlobalContextSetter;
const LogWithContext = (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    const contextParameterIndex = Reflect.getOwnMetadata(logger_symbols_1.CONTEXT_PROPERTY_INDEX_METADATA_KEY, target);
    descriptor.value = async function (...props) {
        var _a;
        const globalContextValue = Reflect.getOwnMetadata(logger_symbols_1.GLOBAL_CONTEXT_VALUE_METADATA_KEY, target);
        const context = (_a = props === null || props === void 0 ? void 0 : props[contextParameterIndex]) !== null && _a !== void 0 ? _a : globalContextValue;
        if (context) {
            console.group(colors_1.default.bgWhite.black(` -- ${colors_1.default.bold(context)} -- [context] -- `), '--------------------------------------');
        }
        originalMethod.apply(this, props);
        if (context) {
            console.groupEnd();
            console.log('----------------------------------------------------------------\n');
        }
    };
};
exports.LogWithContext = LogWithContext;
//# sourceMappingURL=logger.decorators.js.map