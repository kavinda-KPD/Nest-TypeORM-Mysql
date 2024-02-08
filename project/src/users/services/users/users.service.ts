import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { createUserParams, updateUserParams } from 'src/utills/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    findUser(){
        return this.userRepository.find({relations:['profile','posts']});
    }

    createUser(createUserDetails:createUserParams){
        const newUser = this.userRepository.create({
            ...createUserDetails,
            createdAt:new Date()
        });

        return this.userRepository.save(newUser);
    }

    updateByUserId(id:number , updateteUserDetails:updateUserParams) {
        return this.userRepository.update({id}, {...updateteUserDetails});
    }

    deleteByUserId(id:number){
        return this.userRepository.delete({id});
    }
}
