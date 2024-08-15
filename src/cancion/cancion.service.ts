/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
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
    private cancionRepository: Repository<Cancion>,
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createCancionDto: CreateCancionDto) {
    const genero = await this.generoRepository.findOne({
      where: { id: createCancionDto.generoId },
    });
    if (!genero) {
      throw new NotFoundException(
        `Genero with ID ${createCancionDto.generoId} not found`,
      );
    }

    const author = await this.authorRepository.findOne({
      where: { id: createCancionDto.authorId },
    });

    if (!author) {
      throw new NotFoundException(
        `Author with ID ${createCancionDto.authorId} not found`,
      );
    }

    const cancion = this.cancionRepository.create({
      ...createCancionDto,
      genero,
      author,
    });
    return await this.cancionRepository.save(cancion);
  }

  async findAll() {
    const canciones = await this.cancionRepository.find({relations:['genero','author']});

    if (canciones.length === 0) {
      throw new NotFoundException('No songs found');
    }

    return canciones;
  }

  async findOne(id: number) {
    const cancion = await this.cancionRepository.findOne({
      where: { id },
      relations: ['genero', 'author'],
    });

    if (!cancion) {
      throw new NotFoundException(`Cancion with ID ${id} not found`);
    }

    return cancion;
  }

  async update(id: number, updateCancionDto: UpdateCancionDto) {
    const genero = await this.generoRepository.findOne({
      where: { id: updateCancionDto.generoId },
    });
    if (!genero) {
      throw new NotFoundException(
        `Genero with ID ${updateCancionDto.generoId} not found`,
      );
    }

    const author = await this.authorRepository.findOne({
      where: { id: updateCancionDto.authorId },
    });

    if (!author) {
      throw new NotFoundException(
        `Author with ID ${updateCancionDto.authorId} not found`,
      );
    }

    // Cargar y combinar la entidad
    const cancion = await this.cancionRepository.preload({
      id,
      ...updateCancionDto,
      genero,
      author,
    });

    if (!cancion) {
      throw new NotFoundException(`Cancion with ID ${id} not found`);
    }

    // Guardar la entidad actualizada
    return await this.cancionRepository.save(cancion);
  }

  async remove(id: number) {
    const cancion = await this.cancionRepository.findOne({ where: { id } });
    if (!cancion) {
      throw new NotFoundException(`Cancion with ID ${id} not found`);
    }

    return await this.cancionRepository.remove(cancion);
  }
}
