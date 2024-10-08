/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Cancion } from 'src/cancion/entities/cancion.entity';
import { CancionController } from 'src/cancion/cancion.controller';
import { CancionService } from 'src/cancion/cancion.service';
import { Genero } from 'src/generos/entities/genero.entity';
import { GenerosService } from 'src/generos/generos.service';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { PlaylistService } from 'src/playlist/playlist.service';


@Module({
  imports:[TypeOrmModule.forFeature([Author,Cancion,Genero,Playlist])],
  controllers: [AuthorController,CancionController],
  providers: [AuthorService,CancionService,GenerosService,PlaylistService],
})
export class AuthorModule {}
