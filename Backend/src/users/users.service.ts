import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

    createUser(createUserInput: createUserInput): Promise<User>{
        const newUser = this.usersRepository.create(createUserInput); // insert a user
        return this.usersRepository.save(newUser)
    }

    async findAll(): Promise<User[]>{
        return this.usersRepository.find(); // SELECT * user
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOneOrFail({ where: { id } });
    }
}

