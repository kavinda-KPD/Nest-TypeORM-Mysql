import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private userService : UsersService
    ){}

    @Get()
    getUsers() {
        const users = this.userService.findUser();
        return users;
    }

    @Post()
    createUser(@Body()createUserDTO : CreateUserDto) {
        console.log("CreateDto => ",createUserDTO);
        return this.userService.createUser(createUserDTO);
    }

    @Put(':id')
    updateUserById(
        @Param('id',ParseIntPipe)id : number,
        @Body() updateUserDTO: UpdateUserDto
        ){
        return this.userService.updateByUserId(id , updateUserDTO);
    }

    @Delete(':id')
    deleteUserById(
        @Param('id',ParseIntPipe)id : number
    ){
        return this.userService.deleteByUserId(id);
    }
}
