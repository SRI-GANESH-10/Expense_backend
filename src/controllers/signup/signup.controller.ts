import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { SignUpDetails } from 'src/dto/user.dto';
import { SignUpDetailsValidator } from 'src/pipes/signup.pipe';
import { SignupProvider } from 'src/providers/signup.provider';

@Controller('users')
export class SignupController {

    constructor(private readonly SignupProvider: SignupProvider) {}
    @Post()
    @UsePipes(SignUpDetailsValidator)
    create(@Body() req : SignUpDetails){
        return this.SignupProvider.create(req)
    }

    @Get()
    getAllUsers(){
        return this.SignupProvider.findOne();
    }

}
