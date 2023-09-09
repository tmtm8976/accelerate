import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class createUserInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field()
  username: string;


  @Field()
  password: string;

  @Field({ nullable: true })
  type?: string;
}
