import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { createUserProfileParams } from 'src/utills/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {

    constructor(
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }

    async createUserProfile(
        id: number,
        createUserProfileDetails: createUserProfileParams
    ) {
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new HttpException('User Not Found. Profile did not created',HttpStatus.BAD_REQUEST)
        }

        const newProfile = this.profileRepository.create(createUserProfileDetails);
        const saveProfile = await this.profileRepository.save(newProfile);

        user.profile = saveProfile;
        const savedUser = this.userRepository.save(user);

        return savedUser;


    }
}
