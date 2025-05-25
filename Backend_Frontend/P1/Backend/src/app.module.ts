import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { AddressModule } from './address/address.module';
import { NotificationModule } from './notification/notification.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CategoryModule, OrderModule, AddressModule, NotificationModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
