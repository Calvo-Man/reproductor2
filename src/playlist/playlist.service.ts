import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaylistService {
constructor(@InjectRepository(Playlist) private playlistRepository: Repository<Playlist>){}

   async create(createPlaylistDto: CreatePlaylistDto):Promise<any> {
    return await this.playlistRepository.insert(createPlaylistDto);
  }

  async findAll():Promise<any> {
    return await this.playlistRepository.find();
  }

  async findOne(id: number):Promise<any> {
    return await this.playlistRepository.findOneBy({id});
  }

  async update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return await this.playlistRepository.update({id},updatePlaylistDto);
  }

  async remove(id: number) {
    return await this.playlistRepository.delete({id});
  }
}
