/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private authorRepository: Repository<Author>){}

  
  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorRepository.insert(createAuthorDto);
  }

  async findAll() {
    return await this.authorRepository.find({relations:['canciones']});
  }

  async findOne(id: number) {
    return await this.authorRepository.findOne({
      where: { id },
      relations: ['canciones'],
    });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorRepository.update({id},updateAuthorDto);
  }

  async remove(id: number) {
    return this.authorRepository.delete({id});
  }
}
