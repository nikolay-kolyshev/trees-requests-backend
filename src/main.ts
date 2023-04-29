import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { LoggerService } from '@/common/logger/logger.service';

const LOGGER_CONTEXT = 'app';

async function bootstrap() {
  /** [app] init */
  const app = await NestFactory.create(AppModule);
  /** [app] enable cors */
  app.enableCors({
    origin: true,
  });
  /** [logger] init */
  const logger = await app.resolve(LoggerService);
  /** [logger] set global context */
  logger.globalContext = LOGGER_CONTEXT;
  /** [app] cookie parser init */
  /** [swagger] DocumentBuilder configuration */
  const config = new DocumentBuilder()
    .setTitle('Запросы на спасение деревьев')
    .setDescription('API для запросов на спасение деревьев')
    .setVersion('0.0.0')
    .addTag('trees-requests')
    .build();
  /** [swagger] DocumentOptions configuration */
  const documentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  /** [swagger] SwaggerModule document init */
  const document = SwaggerModule.createDocument(app, config, documentOptions);
  /** [swagger] SwaggerModule setup */
  SwaggerModule.setup('docs', app, document);
  /** [config] get port */
  const PORT = +app.get(ConfigService).get('http.port') || 5000;
  /** [app] listening service */
  await app.listen(PORT, async () => {
    logger.success(`Service listening on PORT = ${PORT}`);
    logger.log(`Environment = ${process.env.NODE_ENV}`);
  });
}
bootstrap();
