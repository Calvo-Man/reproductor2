/* eslint-disable prettier/prettier */

import { IsNotEmpty,IsString } from 'class-validator';

export class CreateAuthorDto {

    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsString()
    country:string

}
