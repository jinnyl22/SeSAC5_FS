import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// create dto에 없는 것들은 update dto에 적어주어야한다!
export class UpdateUserDto extends PartialType(CreateUserDto) {}
