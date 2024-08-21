/* eslint-disable prettier/prettier */

import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Genero } from 'src/generos/entities/genero.entity';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsArray()
  @IsNumber({}, { each: true })
  generos: Genero[];
}
