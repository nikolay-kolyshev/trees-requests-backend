"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const logger_service_1 = require("./common/logger/logger.service");
const LOGGER_CONTEXT = 'app';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
    });
    const logger = await app.resolve(logger_service_1.LoggerService);
    logger.globalContext = LOGGER_CONTEXT;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Запросы на спасение деревьев')
        .setDescription('API для запросов на спасение деревьев')
        .setVersion('0.0.0')
        .addTag('trees-requests')
        .build();
    const documentOptions = {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config, documentOptions);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const PORT = +app.get(config_1.ConfigService).get('http.port') || 5000;
    await app.listen(PORT, async () => {
        logger.success(`Service listening on PORT = ${PORT}`);
        logger.log(`Environment = ${process.env.NODE_ENV}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map