import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.category.create({
      data: createCategoryDto
    })
  }

  findAll() {
    return this.category.findMany({
      orderBy:{
        createdAt: 'desc'
      }
  });
  }

  remove(id: string) {
    return this.category.delete({where: {id}});
  }
}
