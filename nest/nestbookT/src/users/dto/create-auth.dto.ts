import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsOptional()
  authname: string;
}
