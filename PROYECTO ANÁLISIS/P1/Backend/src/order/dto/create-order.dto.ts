import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    buyerName: string
    @IsString()
    buyerEmail: string
    @IsString()
    buyerPhone: string
    @IsString()
    shippingAddress: string
    @IsString()
    city: string
    @IsString()
    productName: string
    @IsNumber()
    quantity: number
    @IsNumber()
    total: number
    @IsString()
    paymentMethod: string
}
