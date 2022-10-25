import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda',
        //     model: 'Civic'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee'
        // }
    ];

    findAll() {
        return this.cars;
    }

    findOneByID(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
        return car;
    }

    create(createCarDTo: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDTo
        }
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDTo: UpdateCarDto) {
        let carDB = this.findOneByID(id);

        if (updateCarDTo.id && updateCarDTo.id !== id) {
            throw new BadRequestException(`Car id is not valid inside body`);
        }

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDTo, id }
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    delete(id: string) {
        const car = this.findOneByID(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return {
            ok: true,
            message: `Car deleted successfully`,
            car
        };
    }

    fillCarsWithSeedDate(cars: Car[]){
        this.cars = cars;
    }

}
