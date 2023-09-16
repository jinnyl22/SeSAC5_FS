import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  Matches,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';
import { CreateAddrDto } from './create-addr.dto';
import { CreateAuthDto } from './create-auth.dto';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: '이메일을 정확히 입력하세요!' })
  @Transform((params) => {
    // console.log('🚀  params:', params);
    return params.value.trim();
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value, obj: { passwd, name } }) => {
    if (passwd.includes(name.trim()))
      throw new BadRequestException('암호에 이름이 포함되면 안됩니다!');

    return value;
  })
  @Matches(/^[A-z\d!@#$%^&*()]*$/, {
    message: '암호는 영문과 특수문자만 가능합니다!',
  })
  @Matches(/^[A-z\d!@#$%^&*()]{8,30}$/, {
    message: '암호는 최소 8자리 이상 30자 미만입니다!',
  })
  passwd: string;

  // 중첩 객체의 유효성 검사
  @ValidateNested()
  // 리터럴 객체를 해당 클래스의 인스턴스로 변환
  @Type(() => CreateProfileDto)
  // 비워두면 안되는 항목 검사
  @IsNotEmpty()
  profile: CreateProfileDto;

  // 여기서 벨리데이션 체크를 해주어야함
  @ValidateNested()
  @Type(() => CreateAddrDto)
  addrs?: CreateAddrDto[];

  auths: CreateAuthDto[];
}
