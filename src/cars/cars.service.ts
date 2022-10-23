import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 1,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 1,
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneByID(id: number) {
        const car = this.cars.find(car => car.id === id);
        return car;
    }
}