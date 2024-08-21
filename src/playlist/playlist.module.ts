/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { Cancion } from 'src/cancion/entities/cancion.entity';
import { CancionService } from 'src/cancion/cancion.service';
import { Genero } from 'src/generos/entities/genero.entity';
import { GenerosService } from 'src/generos/generos.service';
import { Author } from 'src/author/entities/author.entity';
import { AuthorService } from 'src/author/author.service';

@Module({
  imports:[TypeOrmModule.forFeature([Playlist,Cancion,Genero,Author])],
  controllers: [PlaylistController],
  providers: [PlaylistService,CancionService,GenerosService,AuthorService],
})
export class PlaylistModule {}
