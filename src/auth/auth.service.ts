import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { Repository } from 'typeorm';
import { promisify } from 'util';
import { User } from './user.entity';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async registerWithEmailAndPassword(email: string, password: string) {
    const foundUser = await this.findUserByEmail(email);
    if (foundUser) {
      throw new BadRequestException('Email already in use!');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = `${salt}.${hash.toString('hex')}`;

    const user = this.userRepository.create({ email, password: result });
    return this.userRepository.save(user);
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    const foundUser = await this.findUserByEmail(email);
    if (!foundUser) {
      throw new NotFoundException('User not found!');
    }

    const [salt, storedHash] = foundUser.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Incorrect password!');
    }

    return foundUser;
  }

  findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
