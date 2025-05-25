import { IsString } from "class-validator";

export class CreateNotificationDto {
    @IsString()
    date: string;
    @IsString()
    message: string;
}
