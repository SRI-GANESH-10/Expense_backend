import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { LoginController } from "src/controllers/login/login.controller";

import { LoginProvider } from "src/providers/login.provider";
import { UserVerify, UserVerifySchema } from "src/repositories/schemas/userverify.schema";

@Module({

    imports:[MongooseModule.forFeature([{name:UserVerify.name , schema:UserVerifySchema}])],

    controllers:[LoginController],

    providers:[LoginProvider ]

})

export class LoginModule {}