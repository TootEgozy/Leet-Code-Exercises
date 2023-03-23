import { expect } from "chai";
import lengthOfLongestSubstring from "./index";


describe('3: Length Of Longest Substring Without repeating Characters', () => {
    it('should return the correct length', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).to.eq(3);
    });

    it('should return the correct length when string is the same char', () => {
        expect(lengthOfLongestSubstring('aaaaaaa')).to.eq(1);
    });

    it('should return the correct length when string length is 0', () => {
        expect(lengthOfLongestSubstring('')).to.eq(0);
    });

    it('should return the correct length when the longest substring is last', () => {
        expect(lengthOfLongestSubstring('asasassdret')).to.eq(5);
    });

    it('should return the correct length when the longest substring is first', () => {
        expect(lengthOfLongestSubstring('abcdeegrgrgr')).to.eq(5);
    });
});