import { Controller, Get, Req, Res, Post, Put, Patch, Delete, UseInterceptors, Body} from '@nestjs/common'
import { Response, Request } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}
    
    @Get('/')
    async getAllUsers(
        @Res() req: Request,
        @Res() res: Response,
    ){
        return res.send({status: 'ok'})
    }

    @Get('/:id')
    async getUser(
        @Res() req: Request,
        @Res() res: Response,
    ){

    }

    @Post('/')
    // @UseInterceptors(FileInterceptor(''))
    async createUser(
        @Body() body: any,
    ){
        console.log("---------------Это тело запроса---------------")
        console.log(body)
        return this.userService.createUser(body)
    
    }

    @Put('/:id')
    async updateUser(
        @Res() req: Request,
        @Res() res: Response,
    ){

    }

    @Patch('/:id')
    async updateUserField(
        @Res() req: Request,
        @Res() res: Response,
    ){

    }

    @Delete('/:id')
    async deleteUser(
        @Res() req: Request,
        @Res() res: Response,
    ){

    }


       

// GET /users/
// GET /users/:id
// POST /users/
// PUT /users/:id
}
