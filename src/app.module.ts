import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from '../config/configuration';
import { LoggerModule } from '@/common/logger/logger.module';
import { TreesRequestsModule } from '@/trees-requests/trees-requests.module';
import { MulterModule } from '@nestjs/platform-express';
import { ImagesModule } from './images/images.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('db.postgresql.host'),
        port: +configService.get('db.postgresql.port'),
        username: configService.get('db.postgresql.username'),
        password: configService.get('db.postgresql.password'),
        database: configService.get('db.postgresql.database'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MulterModule.register({
      dest: './files',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
    LoggerModule,
    TreesRequestsModule,
    ImagesModule,
  ],
})
export class AppModule {}
