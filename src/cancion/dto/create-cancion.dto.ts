/* eslint-disable prettier/prettier */

import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateCancionDto {
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    photo:string;

    @IsNotEmpty()
    @IsString()
    mp3:string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    year:Date;

    @IsNotEmpty()
    @IsNumber()
    generoId: number;

    @IsNotEmpty()
    @IsNumber()
    authorId: number;
    
    @IsOptional()
    @IsNumber()
    playlistId?: number;


}
