import { Module } from '@nestjs/common';
import { UsersController } from './contollers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { ProfilesController } from './contollers/profiles/profiles.controller';
import { ProfilesService } from './services/profiles/profiles.service';
import { Profile } from 'src/typeorm/entities/Profile';

@Module({
  imports: [
    TypeOrmModule.forFeature([User,Profile])
  ],
  controllers: [UsersController, ProfilesController],
  providers: [UsersService, ProfilesService]
})
export class UsersModule {}
