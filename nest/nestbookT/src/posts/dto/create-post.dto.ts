import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SuperCreateDto } from '../../db/super.dto';

export class CreatePostDto extends SuperCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsInt()
  @IsNotEmpty()
  writer: number;
}
