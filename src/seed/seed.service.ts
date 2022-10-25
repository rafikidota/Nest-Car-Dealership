import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/car.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService    
  ) {

  }
  populateDB() {
    this.brandsService.fillBrandsWithSeedDate(BRANDS_SEED);
    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    return `SEED executed successfully`;
  }

}
