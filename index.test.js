const dogCreator = require('./index');

describe('dog create function', () => {

  it('returns a dog object', () => {
    const dog = dogCreator('spot', 5, '20lbs');
    expect(dog).toEqual({
      name:'spot',
      age: 5,
      weight: '20lbs'
    });
  });
});
