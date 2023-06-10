import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123, })
  id?: string;

  @ApiProperty({ example: 'cookie' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'ikmoons.is@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  username: string;
}

export class CreateUserDto {}
export class UpdateUserDto extends PartialType(CreateUserDto) { }