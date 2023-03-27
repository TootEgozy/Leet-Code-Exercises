// Link to question: https://leetcode.com/problems/longest-palindromic-substring

type Map = {
  [key: string]: number[]
} & {
  longest: string
}

const isPalindrome = (s: string) => {
  const firstHalf = s.slice(0, Math.floor(s.length / 2));
  const secondHalf = s.slice(Math.ceil(s.length / 2), s.length);
  return firstHalf === secondHalf.split('').reverse().join('');
}

function longestPalindrome(s: string): string {
  // @ts-ignore //Todo: fix types
  const map: Map = { longest: s[0] };
  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    if(map[char]) {
      map[char].forEach((j: number) => {
        const segment = s.slice(j, i+1);
        if (isPalindrome(segment) && map.longest.length < segment.length) map.longest = segment;
      });
      map[char].push(i);
    }
    map[char] = [i];
  }
  return map.longest || s[0];
}

export { isPalindrome, longestPalindrome };