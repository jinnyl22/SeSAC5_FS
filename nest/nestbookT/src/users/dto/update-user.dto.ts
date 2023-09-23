import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// PartialType은 메서드는 다 걷어내주고 프로퍼티에는 ?를 붙여준다
export class UpdateUserDto extends PartialType(CreateUserDto) {
  //CreateUserDto에 없는 것들 추가로 넣어주기
}
