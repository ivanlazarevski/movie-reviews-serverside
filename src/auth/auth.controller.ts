import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthUserDto } from 'src/dtos/auth-user.dto';
import { UserDto } from 'src/dtos/user.dto';
import { Serialize } from 'src/interceptors/users.interceptor';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/logout')
  logOut(@Session() session: any) {
    session.userId = null;
  }

  @Post('/register')
  async registerUser(@Body() body: AuthUserDto, @Session() session: any) {
    const user = await this.authService.registerWithEmailAndPassword(
      body.email,
      body.password,
    );
    session.userId = user.id;
    return user;
  }

  @Post('/login')
  async loginUser(@Body() body: AuthUserDto, @Session() session: any) {
    const user = await this.authService.signInWithEmailAndPassword(
      body.email,
      body.password,
    );
    session.userId = user.id;
    return user;
  }
}
