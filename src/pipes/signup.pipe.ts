import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

export class SignUpDetailsValidator implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        const {firstName, lastName , email , password } = value

        if(typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof password !== "string")
            throw new BadRequestException("Invalid input. All fields must be strings.")
        else 
            return value

    }
}