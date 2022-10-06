const mathOperations = require('./calc');

describe("Calculator tests", () => {
    test('adding 5 + 2 should return 7', () => {
      // arrange and act
      var result = mathOperations.sum(5,2)
    
      // assert
      expect(result).toBe(7);
    });
    
    test("subtracting 5 from 10 should return 5", () => {
      // arrange and act
      var result = mathOperations.diff(10,5)
    
      // assert
      expect(result).toBe(5);
    });
    
    test("multiplying 2 and 7 should return 14", () => {
      // arrange and act
      var result = mathOperations.product(2,7)
    
      // assert
      expect(result).toBe(14);
    });
   })