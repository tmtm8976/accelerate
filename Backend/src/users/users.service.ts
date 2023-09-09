import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserInput } from './dto/create-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserInput: createUserInput): Promise<User> {

    // hashing password
    const saltOrRounds = 10;
    const salt = await bcrypt.genSalt(saltOrRounds);
    createUserInput.password = await bcrypt.hash(createUserInput.password, salt);

    const newUser = this.usersRepository.create({...createUserInput, salt: salt}); // insert a user
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find(); // SELECT * user
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOneOrFail({ where: { username } });
  }

  
}