/* eslint-disable prettier/prettier */
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GenerosModule } from './generos/generos.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { PlaylistModule } from './playlist/playlist.module';
import { CancionModule } from './cancion/cancion.module';

@Module({
  imports: [
    GenerosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'reproductor',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthorModule,
    PlaylistModule,
    CancionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
