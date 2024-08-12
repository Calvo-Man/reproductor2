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

@Module({
  imports:[TypeOrmModule.forFeature([Cancion,Genero,Author])],
  controllers: [CancionController,GenerosController,AuthorController],
  providers: [CancionService,GenerosService,AuthorService]
})
export class CancionModule {}
