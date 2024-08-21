/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Cancion } from 'src/cancion/entities/cancion.entity';

export class CreatePlaylistDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @IsNumber({}, { each: true })
  canciones: Cancion[];
}
