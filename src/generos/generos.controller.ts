import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) { }

  @Post()
  async create(@Body() createGeneroDto: CreateGeneroDto) {
    return await this.generosService.create(createGeneroDto);
  }

  @Get()
  async findAll() {
    return await this.generosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.generosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return await this.generosService.update(+id, updateGeneroDto);
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    return await this.generosService.remove(+id);
  }
}
