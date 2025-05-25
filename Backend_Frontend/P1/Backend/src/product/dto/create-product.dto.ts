import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    product: string;
    @IsNumber()
    price: number;
    @IsString()
    artisan: string;
    @IsString()
    category: string;
}
