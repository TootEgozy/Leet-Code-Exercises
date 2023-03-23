// Link to the question: https://leetcode.com/problems/longest-substring-without-repeating-characters

type Acc = {
    maxCount: number
    current: string[]
}

const compileAcc = (acc: Acc) => {
    acc.maxCount = Math.max(acc.maxCount, acc.current.length);
    acc.current = [];
    return acc;
}

export default function lengthOfLongestSubstring(s: string): number {
    let acc: Acc = {
        maxCount: 0,
        current: [],
    };
    for (let i = 0; i < s.length; i++) {
        const char: string = s[i];
        if (!acc.current.includes(char)) acc.current.push(char);
        else acc = compileAcc(acc);
    }
    return compileAcc(acc).maxCount;
}