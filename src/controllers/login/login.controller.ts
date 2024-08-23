import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UserDetails } from 'src/dto/user.dto';
import { StringValidator } from 'src/pipes/login.pipe';
import { LoginProvider } from 'src/providers/login.provider';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginProvider) {}

  @Post()
  @UsePipes(StringValidator)
  postLogin(@Body() req: UserDetails) {
    const firstName = req.firstName;
    const password = req.password;
    const result = this.loginService.validateUser(firstName, password);
    return result;
  }
}
