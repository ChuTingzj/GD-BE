import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthorizeService } from './authorize.service';
import { LocalStrategy } from './local.strategy';
import { AuthorizeController } from './authorize.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'admin123',
      signOptions: { expiresIn: '4h' },
    }),
  ],
  controllers: [AuthorizeController],
  providers: [AuthorizeService],
})
export class AuthorizeModule {}
