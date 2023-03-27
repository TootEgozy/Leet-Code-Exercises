import { expect } from "chai";
import { longestPalindrome } from "./index";
import * as faker from 'faker';

const generatePalindrome = (length: number) => {
  const middleChar = faker.random.alpha({ count: 1 });
  if (length === 1) return middleChar;
  let chars = faker.random.alpha({ count: Math.floor(length / 2) });
  const mirror = chars.split('').reverse().join('');
  if (length % 2 !== 0) chars = chars.concat(middleChar);
  return chars.concat(mirror);
}

describe('5: Longest Palindromic Substring', () => {
  it('should return the string length of an even palindromic string', () => {
      const pal = generatePalindrome(5);
      expect(longestPalindrome(pal)).to.eq(pal);
  });

  it('should return the string length of an odd palindromic string', () => {
      const pal = generatePalindrome(7);
      expect(longestPalindrome(pal)).to.eq(pal);
  });

  it('should return 1 for a single char string', () => {
      const pal = faker.random.alpha({ count: 1 });
      expect(longestPalindrome(pal)).to.eq(pal);
  });

  it('should return 2 for a two-char string', () => {
      const pal = generatePalindrome(2);
      expect(longestPalindrome(pal)).to.eq(pal);
  });

  it('should return palindrome length when it\'s in the beginning of a string', () => {
      const pal = generatePalindrome(3);
      const str = 'abcd'.concat(pal);
      expect(longestPalindrome(str)).to.eq(pal);
  });

  it('should return palindrome length when it\'s in the end of a string', () => {
      const pal = generatePalindrome(4);
      const str = pal.concat('efgh');
      expect(longestPalindrome(str)).to.eq(pal);
  });

  it('should return palindrome length when it\'s in the middle of a string', () => {
      const pal = generatePalindrome(2);
      const str = 'abcd'.concat(pal).concat('efgh');
      expect(longestPalindrome(str)).to.eq(pal);
  });
});