import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SignUpDetails } from "src/dto/user.dto";
import { SignUp, SignUpDocument } from "src/repositories/schemas/signup.schema";

@Injectable()
export class SignupProvider {
    constructor(@InjectModel(SignUp.name) private readonly signUpModel:Model<SignUp>){}

    async create(SignUpDetails:SignUpDetails) : Promise<SignUp>{
        const newSignUp = new this.signUpModel(SignUpDetails);
        return newSignUp.save();
    }

    async findOne(): Promise<SignUp[] | undefined> {
        return this.signUpModel.find().exec();
    }
    

}

