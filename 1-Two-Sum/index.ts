// link to question: https://leetcode.com/problems/two-sum

interface Acc {
    [key: number] : number
}

export function twoSum(nums: number[], target: number): number[] | undefined {
    const acc: Acc = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const sum = target - num;
        if(acc.hasOwnProperty(String(sum))) return [acc[sum], i];
        acc[num] = i;
    }
    return Object.values(acc);
};