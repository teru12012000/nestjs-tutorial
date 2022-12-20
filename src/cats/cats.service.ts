import { Injectable } from '@nestjs/common';
import { Cats } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cats[] = [
    {
      name: 'mike',
      age: 5,
      breed: 'unknown',
    },
  ];

  create(cat: Cats) {
    this.cats.push(cat);
  }

  findAll(): Cats[] {
    return this.cats;
  }
}
