import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { SuperCreateDto } from 'src/db/super.dto';

export class CreateTagDto extends SuperCreateDto {
  @Matches(/^[0-9A-zㄱ-힣]{2,8}$/, {
    message: '해시태그는 특수문자 제외 2~8글자 입니다!',
  })
  @IsString()
  @IsNotEmpty()
  tagname: string;
}
