import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  name: string;

  age: number;

  email: string;

  password: string;
}
