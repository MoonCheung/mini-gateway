import type { RedisClientOptions } from 'redis';
import { APP_GUARD } from '@nestjs/core'
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017',
      // username: "admin",
      // password: "123456",
      database: 'mini-gateway',
      entities: [__dirname + '/**/*.mongo.entity{.ts,.js}'],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: getConfig('REDIS_CONFIG').host,
      port: getConfig('REDIS_CONFIG').port,
      auth_pass: getConfig('REDIS_CONFIG').auth,
      db: getConfig('REDIS_CONFIG').db
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig]
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ]
})
export class AppModule { }
