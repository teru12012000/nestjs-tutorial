import { Cats } from './dto/cats.dto';

describe('Cats', () => {
  it('should be defined', () => {
    expect(new Cats()).toBeDefined();
  });
});
