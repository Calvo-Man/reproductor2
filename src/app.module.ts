
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GenerosModule } from './generos/generos.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GenerosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'reproductor',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities:true,
      synchronize:true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
