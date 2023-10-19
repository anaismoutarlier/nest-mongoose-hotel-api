import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoomDoc = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop()
  description: string;

  @Prop({ validate: (val: number) => val >= 0 })
  occupancy: number;

  @Prop()
  price: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
