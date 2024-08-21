/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneroDto } from './create-genero.dto';
import { IsNotEmpty,IsString } from 'class-validator';
export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {
    @IsNotEmpty()
    @IsString()
    name:string

}
