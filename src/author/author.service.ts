/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { In, Repository } from 'typeorm';
import { Genero } from 'src/generos/entities/genero.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private authorRepository: Repository<Author>,
    @InjectRepository(Genero) private generoRepository: Repository<Genero>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    const generos = await this.generoRepository.find({
      where: {
        id: In(createAuthorDto.generos),
      },
    });
    
    const autor = this.authorRepository.create({
      ...createAuthorDto,
      generos,
    });
    return this.authorRepository.save(autor);
  }

  async findAll() {
    return await this.authorRepository.find({
      relations: ['canciones', 'generos'],
    });
  }

  async findOne(id: number) {
    return await this.authorRepository.findOne({
      where: { id },
      relations: ['canciones', 'generos'],
    });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorRepository.update({ id }, updateAuthorDto);
  }

  async remove(id: number) {
    return this.authorRepository.delete({ id });
  }
}
