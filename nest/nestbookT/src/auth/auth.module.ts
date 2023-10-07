import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  // 다른데서도 사용가능 하도록 export해준다!
  exports: [AuthService],
})
export class AuthModule {}
