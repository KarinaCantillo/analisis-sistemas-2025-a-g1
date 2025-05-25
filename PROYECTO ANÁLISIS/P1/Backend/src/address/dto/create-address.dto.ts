import { IsString } from "class-validator";

export class CreateAddressDto {
    @IsString()
    street: string;
    @IsString()
    country: string;
}
