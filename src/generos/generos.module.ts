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

@Module({
  imports:[TypeOrmModule.forFeature([Genero,Cancion,Author])],
  controllers: [GenerosController,CancionController],
  providers: [GenerosService,CancionService],
})
export class GenerosModule {}
