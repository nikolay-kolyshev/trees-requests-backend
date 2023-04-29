import { ConsoleLogger, LoggerService as IBaseLoggerService } from '@nestjs/common';
export declare class LoggerService extends ConsoleLogger implements IBaseLoggerService {
    log(message: any, context?: string, isSuccess?: boolean): void;
    warn(message: any, context?: string): void;
    error(message: any, stack?: string, context?: string): void;
    success(message: any, context?: string): void;
    set globalContext(context: string);
    setContext(): void;
    private getWrappedMessage;
}
