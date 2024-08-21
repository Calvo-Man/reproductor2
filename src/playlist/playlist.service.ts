/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { In, Repository } from 'typeorm';
import { Cancion } from 'src/cancion/entities/cancion.entity';
// import { CreateCancionDto } from 'src/cancion/dto/create-cancion.dto';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist) private playlistRepository: Repository<Playlist>,
    @InjectRepository(Cancion) private cancionRepository: Repository<Cancion>,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto){
    const canciones = await this.cancionRepository.find({
      where: { id: In(createPlaylistDto.canciones) },
    });

    const playlist = this.playlistRepository.create({
      ...createPlaylistDto,
      canciones,
    });
    return this.playlistRepository.save(playlist);
  }

  async findAll(): Promise<any> {
    return await this.playlistRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.playlistRepository.findOneBy({ id });
  }

  async update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return await this.playlistRepository.update({ id }, updatePlaylistDto);
  }

  async remove(id: number) {
    return await this.playlistRepository.delete({ id });
  }
}
