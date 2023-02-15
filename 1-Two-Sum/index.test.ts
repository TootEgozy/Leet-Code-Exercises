import { expect } from 'chai';
import { twoSum } from './index';

describe('1: Two Sum', () => {
    // no tests for cases when there is no solution or multiple solutions,
    // since the question specifies we should assume exactly one solution.

    it('should return the indexes of the addends when target is positive', () => {
       expect(twoSum([1, 2, 3, 4, 0, 6], 7)).to.eqls([2, 3]);
   });

   it('should return the indexes of the addends when target is negative', () => {
       expect(twoSum([0, 0, 8, -1, -2, 5], -3)).to.eqls([3, 4]);
   });

   it('should return the indexes of the addends when target is zero', () => {
       expect(twoSum([1, -1, 2, -2], 0)).to.eqls([0, 1]);
   });

   it('should return the indexes of the first numbers which adds up to target', () => {
       expect(twoSum([2, 2, 2, 2], 4)).to.eqls([0, 1]);
   });

   it('should return the index of the element that equals to target, when array length is 1', () => {
       expect(twoSum([5], 5)).to.eqls([0]);
   })
});