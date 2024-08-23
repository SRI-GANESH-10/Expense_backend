import { Prop , Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection:'users'})
export class SignUp extends Document {
    @Prop()
    firstName:string

    @Prop()
    lastName: string

    @Prop()
    email: string

    @Prop()
    password: string
}

export const SignUpDocument = SchemaFactory.createForClass(SignUp)