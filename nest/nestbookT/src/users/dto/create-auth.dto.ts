import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SuperCreateDto } from 'src/db/super.dto';

export class CreateAuthDto extends SuperCreateDto {
  // @IsInt()
  // @IsOptional()
  // id: number;

  @IsString()
  @IsNotEmpty()
  // @IsOptional()
  authname: string;
}
