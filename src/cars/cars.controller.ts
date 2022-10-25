import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
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
    create(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    update(
        @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
        @Body() updateCarDto: UpdateCarDto
    ) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    delete(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.delete(id);
    }

}
