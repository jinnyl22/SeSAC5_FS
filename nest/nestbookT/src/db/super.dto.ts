import { IsInt, IsOptional } from 'class-validator';

export class SuperCreateDto {
  // 있으면 update, 없으면 insert
  @IsInt()
  @IsOptional()
  id: number;
}
