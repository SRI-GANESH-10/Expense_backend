import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection:'users'})
export class UserVerify extends Document {
  @Prop({ required: true })  
  firstName: string;

  @Prop({ required: true })
  password: string;
}

export const UserVerifySchema = SchemaFactory.createForClass(UserVerify);
