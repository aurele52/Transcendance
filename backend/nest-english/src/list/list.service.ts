import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}

  create(createListDto: CreateListDto) {
    return this.prisma.word.create({ data: createListDto });
  }

  findAll() {
    return this.prisma.word.findMany();
  }

  findOne(id: number) {
    return this.prisma.word.findUnique({ where: { id } });
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
