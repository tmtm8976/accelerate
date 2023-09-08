import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { createUserInput } from './dto/create-user.input';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService){}
    
    @Query(returns => User)
    getUser(@Args('id', {type: ()=>Int}) id: number): Promise<User>{
        return this.usersService.findOne(id)
    }


    @Query(returns => [User])
    users(): Promise<User[]>{
        return this.usersService.findAll();
    }

    @Mutation(returns=>User)
    createUser(@Args('createUserInput') createUserInput: createUserInput): Promise<User>{
        return this.usersService.createUser(createUserInput)
    }
}
