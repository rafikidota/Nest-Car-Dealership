import { Controller, Get, Param } from '@nestjs/common';
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
    getByID(@Param('id') id) {
        return this.carsService.findOneByID(+id);
    }
    

}
