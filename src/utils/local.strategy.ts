import { compareSync } from 'bcryptjs';
import { PassportStrategy } from '@nestjs/passport';
import { IStrategyOptions, Strategy } from 'passport-local';
import { UserEntity } from '@/entities';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }
}
