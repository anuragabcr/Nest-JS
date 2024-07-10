import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMassages() {
    return 'Messages';
  }

  @Post()
  createMassage() {
    return 'Messages';
  }

  @Get('/:id')
  getMassage() {
    return 'Message';
  }
}
