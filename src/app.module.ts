import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RoomsModule, MongooseModule.forRoot('')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
