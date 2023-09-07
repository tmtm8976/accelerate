import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService){}
    
    @Query(returns => [User])
    users(): Promise<User[]>{
        return this.usersService.findAll();
    }
}
