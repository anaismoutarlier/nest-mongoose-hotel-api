import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './rooms.schema';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) {}
  async getAll() {
    return this.roomModel.find();
  }

  async getOne(roomId: string) {
    return this.roomModel.findById(roomId);
  }

  async new(body: Omit<Room, '_id'>) {
    const newRoom = new this.roomModel(body);
    return newRoom.save();
  }
}
