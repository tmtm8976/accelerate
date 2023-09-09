import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  username: string;


  @Column()
  @Field()
  password: string;

  @Column()
  salt: string; 

  @Column({ nullable: true })
  @Field({ nullable: true })
  gender?: string;
}
