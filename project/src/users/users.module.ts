import { Module } from '@nestjs/common';
import { UsersController } from './contollers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { ProfilesController } from './contollers/profiles/profiles.controller';
import { ProfilesService } from './services/profiles/profiles.service';
import { Profile } from 'src/typeorm/entities/Profile';
import { Post } from 'src/typeorm/entities/Posts';
import { PostsController } from './contollers/posts/posts.controller';
import { PostsService } from './services/posts/posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User,Profile,Post])
  ],
  controllers: [UsersController, ProfilesController, PostsController],
  providers: [UsersService, ProfilesService, PostsService]
})
export class UsersModule {}
