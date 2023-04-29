import { LoggerService } from '@/common/logger/logger.service';
export declare const Context: (target: LoggerService, propertyKey: string, parameterIndex: number) => void;
export declare const GlobalContextSetter: (target: LoggerService, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => void;
export declare const LogWithContext: (target: LoggerService, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => void;
