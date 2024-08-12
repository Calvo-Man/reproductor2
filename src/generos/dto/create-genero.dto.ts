/* eslint-disable prettier/prettier */
import { IsNotEmpty,IsString } from 'class-validator';

export class CreateGeneroDto {

    @IsNotEmpty()
    @IsString()
    name:string

}
