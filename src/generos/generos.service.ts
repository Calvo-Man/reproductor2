/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';


@Injectable()
export class GenerosService {
  constructor(@InjectRepository(Genero) private generoRepository: Repository<Genero>) { }

  
  async create(createGeneroDto: CreateGeneroDto) {
    return await this.generoRepository.insert(createGeneroDto);
  }

  async findAll(): Promise<any> {
    return await this.generoRepository.find({relations:['canciones']});
  }

  async findOne(id: number): Promise<Genero | null> {

    return await this.generoRepository.findOne({
      where: { id },
      relations: ['canciones'],
    });
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return await this.generoRepository.update({id},updateGeneroDto);
  }

  async remove(id: number) {
    return await this.generoRepository.delete(id);
  }
}
