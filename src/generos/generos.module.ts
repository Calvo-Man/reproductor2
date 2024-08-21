/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Cancion } from 'src/cancion/entities/cancion.entity';
import { CancionController } from 'src/cancion/cancion.controller';
import { CancionService } from 'src/cancion/cancion.service';

import { Author } from 'src/author/entities/author.entity';
import { AuthorService } from 'src/author/author.service';
import { AuthorController } from 'src/author/author.controller';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { PlaylistService } from 'src/playlist/playlist.service';

@Module({
  imports:[TypeOrmModule.forFeature([Genero,Cancion,Author,Playlist])],
  controllers: [GenerosController,CancionController,AuthorController],
  providers: [GenerosService,CancionService,AuthorService,PlaylistService],
})
export class GenerosModule {}
