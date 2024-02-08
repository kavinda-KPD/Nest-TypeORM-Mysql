import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { ProfilesService } from 'src/users/services/profiles/profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(
        private profileService: ProfilesService
    ) { }

    @Post(':id/create')
    createUserProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserProfileDto: CreateUserProfileDto
    ) {

        return this.profileService.createUserProfile(id, createUserProfileDto);
    }

}
