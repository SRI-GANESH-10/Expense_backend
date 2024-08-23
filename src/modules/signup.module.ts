import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SignupController } from "src/controllers/signup/signup.controller";
import { SignupProvider } from "src/providers/signup.provider";
import { SignUp, SignUpDocument } from "src/repositories/schemas/signup.schema";

@Module({
    imports: [MongooseModule.forFeature([{name:SignUp.name , schema:SignUpDocument}])],
    controllers:[SignupController],
    providers:[SignupProvider]
})

export class SignupModule {}