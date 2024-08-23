import { PipeTransform , Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";

export class StringValidator implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        
        const user = value.firstName;
        
        const password = value.password;
        
        if(typeof user === 'string' && typeof password === 'string'){
        
            return value
        
        }
        
        else if(typeof password !== 'string'){
        
            throw new BadRequestException('Password must be a string')
        
        }
        
        else{
        
            throw new BadRequestException('User must be a string')
        
        }
 
    }

}
