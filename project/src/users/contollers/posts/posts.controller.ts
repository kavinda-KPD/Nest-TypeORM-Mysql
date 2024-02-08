import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { PostsService } from 'src/users/services/posts/posts.service';

@Controller('posts')
export class PostsController {

    constructor(
        private postService : PostsService
    ){}

    @Post(':id/create')
    createUserPost(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserPostDTO: CreateUserPostDto
        ) {

            return this.postService.createUserPost(id,createUserPostDTO)
    }
}
