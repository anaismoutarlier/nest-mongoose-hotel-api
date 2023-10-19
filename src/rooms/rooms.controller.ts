import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  getAll() {
    return this.roomsService.getAll();
  }

  @Get(':roomId')
  getOne(@Param('roomId') roomId: string) {
    return this.roomsService.getOne(roomId);
  }

  @Post()
  new(@Body() body: Omit<Room, '_id'>) {
    return this.roomsService.new(body);
  }
}
