/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCancionDto } from './create-cancion.dto';
//import { Genero } from 'src/generos/entities/genero.entity';
//import { Author } from 'src/author/entities/author.entity';

export class UpdateCancionDto extends PartialType(CreateCancionDto) {
   
}
