import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { PrismaClient } from '@prisma/client';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }

  create(createNotificationDto: CreateNotificationDto) {
    return this.notification.create({
      data: createNotificationDto
    });
  }

  findAll() {
    return this.notification.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    });
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto) {
      return this.notification.update({
        where: {id},
        data: updateNotificationDto
      })
    }

  remove(id: string) {
    return this.notification.delete({where: {id}});
  }
}
