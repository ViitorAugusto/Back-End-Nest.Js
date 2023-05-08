import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() data) {
    return data;
  }

  @Get()
  async showAll() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param() param) {
    return { user: {}, param };
  }

  @Put(':id')
  async update(@Param() param, @Body() data) {
    return { method: 'Put', param, data };
  }

  @Patch(':id')
  async updatePartial(@Param() param, @Body() data) {
    return { method: 'Patch', param, data };
  }
  @Delete(':id')
  async destroy(@Param() param) {
    return { method: 'Delete', param };
  }
}
