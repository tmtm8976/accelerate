import { InputType, Field } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class createUserInput {
    @IsAlpha()
    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;
}