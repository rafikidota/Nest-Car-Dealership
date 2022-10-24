import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {
    }

    @Get()
    getAll() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getByID(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.findOneByID(id);
    }

    @Post()
    create(@Body() body: any) {
        return body;
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any
    ) {
        return body;
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return `Delete ${id}`;
    }

}
