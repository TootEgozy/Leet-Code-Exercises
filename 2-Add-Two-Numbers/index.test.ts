import { addTwoNumbers, ListNode } from './index';
import * as faker from 'faker';

// const createLinkedList = (length: number) => {
//     let lastNode: ListNode | null = null;
//     for(let i = 0; i < length; i++) {
//         const newNode: ListNode = new ListNode(
//             faker.datatype.number({min: 1, max: 9}), // No leading zeros
//             lastNode,
//         );
//         lastNode = newNode;
//     }
//     return lastNode;
// };
const createLinkedList = (length: number) => {
    let lastNode: ListNode | null = null;
    for(let i = 0; i < length; i++) {
        const value = faker.datatype.number({min: 1, max: 9}); // No leading zeros
        lastNode = new ListNode(value, lastNode);
    }
    return lastNode;
};


const getNumberFromList = (list: ListNode | null, reverse = false) => {
    const values: number[] = [];
    let node = list;
    while(node !== null) {
        values.push(node!['val']);
        node = node!['next'];
    }
    if(reverse) return values.reverse().join('');
    return values.join("");
}

describe('2: Add Two Numbers', () => {
    it('should create and print a linked list', () => {
        const longList = createLinkedList(8);
        const singleNodeList = createLinkedList(1);
        console.log(longList);
        console.log(singleNodeList);
    })
})

const main = () => {
    const lst1 = createLinkedList(1);
    const lst2 = createLinkedList(7);
    console.log(getNumberFromList(lst1, true));
    console.log(getNumberFromList(lst2, true));
    const sumList = addTwoNumbers(lst1, lst2);
    console.log(getNumberFromList(sumList))
};