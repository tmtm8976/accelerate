import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { createUserInput } from './dto/create-user.input';
import { Public } from 'src/auth/auth.controller';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  @Public()
  getUser(@Args('username', { type: () => String }) username: string): Promise<User> {
    return this.usersService.findOne(username);
  }

  @Query((returns) => [User])
  @Public()
  users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation((returns) => User)
  @Public()
  createUser(
    @Args('createUserInput') createUserInput: createUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }
}
