/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { CancionController } from './cancion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancion } from './entities/cancion.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { GenerosController } from 'src/generos/generos.controller';
import { GenerosService } from 'src/generos/generos.service';
import { Author } from 'src/author/entities/author.entity';
import { AuthorController } from 'src/author/author.controller';
import { AuthorService } from 'src/author/author.service';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { PlaylistService } from 'src/playlist/playlist.service';
import { PlaylistController } from 'src/playlist/playlist.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Cancion,Genero,Author,Playlist])],
  controllers: [CancionController,GenerosController,AuthorController,PlaylistController],
  providers: [CancionService,GenerosService,AuthorService,PlaylistService]
})
export class CancionModule {}
