import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Posts';
import { User } from 'src/typeorm/entities/User';

import { createUserPostParams } from 'src/utills/types';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Post) private postRepository: Repository<Post>
    ){}

    async createUserPost(id: number, createUserPostDetails: createUserPostParams) {
        
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new HttpException('User Not Found. Profile did not created',HttpStatus.BAD_REQUEST);
        }

        const newPost = this.postRepository.create({
            ...createUserPostDetails,
            user
        });

        return this.postRepository.save(newPost);
    }
}
