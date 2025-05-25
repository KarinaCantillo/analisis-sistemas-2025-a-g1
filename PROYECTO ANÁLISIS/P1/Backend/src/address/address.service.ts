import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AddressService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  create(createAddressDto: CreateAddressDto) {
    return this.address.create({
      data: createAddressDto
    });
  }

  findAll() {
    return this.address.findMany({
      orderBy:{
        createdAt: 'desc'
      }
  });;
  }

  remove(id: string) {
    return this.address.delete({where: {id}});
  }
}
