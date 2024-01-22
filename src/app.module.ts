import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from '../ormConfig.js'
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [
    AppController,
    UserController
  ],
  providers: [
    AppService, 
    UserService],
})
export class AppModule {}
