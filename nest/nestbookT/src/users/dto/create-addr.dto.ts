import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { SuperEntity } from 'src/db/super.entity';

export class CreateAddrDto extends SuperEntity<CreateAddrDto> {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  detail: string;

  @IsString()
  @IsOptional()
  zipcode: string;
}
