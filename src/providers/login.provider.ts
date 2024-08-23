import { BadRequestException, Injectable } from "@nestjs/common";

import * as jwt from 'jsonwebtoken'

import { promisify } from "util";

import { UserVerify } from "src/repositories/schemas/userverify.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()

export class LoginProvider {

    constructor(@InjectModel(UserVerify.name) private readonly userVerifyModel:Model<UserVerify>){}

    async validateUser(firstName : string , password : string){

        const result = await this.userVerifyModel.findOne({firstName , password})

        console.log(result)
        if(result){

            let payload = {firstName , password}

            //& EXPLAINED BELOW THE CODE
            const sign = promisify(jwt.sign.bind(jwt))                          

            const token = await sign(payload, "Secret"  )

            return {token}

        }

        else{

            throw new BadRequestException('Invalid Credentials')

        }

    }

}










/*
!jwt.sign.bind(jwt)
?It is nothing but explain simply

?So think of jwt.sign is like a receipe in a specific cookbook.
?And if you take it out it knows the recepie i.e instructions
?But it may not have the idea about ingrediemts and things that can be used in that reciepe 
?So the cookbook here is jwt and when we bind it it can get access to all the things that it is needed

!Promisy
?Is a thing that converts the callbacks into promises sign jwt.sign will use call backs it is difficult to handle

*/
