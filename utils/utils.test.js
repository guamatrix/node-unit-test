const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    
      // writting by hand throw error when faild
      // if (res !== 44) {
      //   throw new Error('Expected 44 but get ' + res);
      // }
    });
    
    it('should async add two numbers', (done) => {
      utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });  
  });

  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(3);
      expect(res).toBe(9).toBeA('number');
    
      // if (res !== 9) {
      //   throw new Error('Expected 9, but got ' + res);
      // }
    });
    
    it('should sqaure a number async', (done) => {
      utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
      })
    });  
  });  
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect({ name: 'test' }).toEqual({ name: 'test' });
  expect([2,3,4]).toInclude(2);

});

it('should match lastName', () => {
  let user = { age: 25 };
  const res = utils.setName(user, 'Jhon Doe');

  expect(user).toEqual(res);
  expect(res).toInclude({ firstName: 'Jhon' });
});

