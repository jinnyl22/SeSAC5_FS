import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailService } from '../email/email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { Addr } from './entities/addr.entity';

@Module({
  // entity를 넣어줌!
  // TypeOrmModule의 root에 entity를 직접적으로 넣어줌
  // forFeature는 특정 entity만 넣어주고 싶을 때 사용
  imports: [TypeOrmModule.forFeature([User, Profile, Addr])],

  controllers: [UsersController],
  providers: [UsersService, EmailService],
  exports: [UsersService],
})
export class UsersModule {}
