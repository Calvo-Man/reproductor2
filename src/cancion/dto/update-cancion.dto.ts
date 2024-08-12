/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCancionDto } from './create-cancion.dto';

export class UpdateCancionDto extends PartialType(CreateCancionDto) {
    generoId?: number;

    authorId?: number;
}
