import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { LoginModule } from './modules/login.module';
import { SignupModule } from './modules/signup.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [MongooseModule.forRoot('mongodb://localhost:27017/expenseTracker') , LoginModule , SignupModule],

  controllers: [AppController],

  providers: [AppService],

})

export class AppModule {}
