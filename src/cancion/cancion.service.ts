/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancion } from './entities/cancion.entity';
import { Repository } from 'typeorm';
import { Genero } from 'src/generos/entities/genero.entity';
import { Author } from 'src/author/entities/author.entity';

@Injectable()
export class CancionService {

  constructor(
    @InjectRepository(Cancion)
    private  cancionRepository: Repository<Cancion>,
    @InjectRepository(Genero)
    private  generoRepository: Repository<Genero>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>
  ) {}

  async create(createCancionDto: CreateCancionDto) {
    const genero = await this.generoRepository.findOne({
      where: { id: createCancionDto.generoId },
    });

    const author = await this.authorRepository.findOne({
      where: { id: createCancionDto.authorId },
    });

    const cancion =  this.cancionRepository.create({
      ...createCancionDto,
      genero,
      author,
    });
    return await this.cancionRepository.save(cancion) ;
  }

  findAll() {
    return `This action returns all cancion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancion`;
  }

  update(id: number, updateCancionDto: UpdateCancionDto) {
    return `This action updates a #${id} cancion`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancion`;
  }
}
