import { IsIn, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  // 값이 있을 때만 비교하고 값이 들어오지 않으면 비교하지 않음
  @IsOptional()
  photo: string;

  @IsIn([0, 1, 2, 3])
  role: number;
}
