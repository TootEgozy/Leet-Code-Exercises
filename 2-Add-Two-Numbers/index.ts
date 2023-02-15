// Link to the question: https://leetcode.com/problems/add-two-numbers/

import * as faker from 'faker';

class ListNode {
    val: number
    next: ListNode | null
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

const createLinkedList = (amount: number) => {
    let lastNode: ListNode | null = null;
    for(let i = 0; i < amount; i++) {
        const newNode: ListNode = new ListNode(faker.datatype.number({min: 1, max: 9}), lastNode);
        lastNode = newNode;
    }
    return lastNode;
}


// util function for a readable output
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

// a recursive function that receives the numbers nodes, the reminder from the last calculation and the previous node,
// and construct the linkedList of the result.
const sumLists = (lst1: ListNode | null, lst2: ListNode | null, reminder: number, lastNode?: ListNode): any => {
    if(!lst1 && !lst2) {
        return reminder ? new ListNode(reminder, lastNode) : lastNode;
    }
    const sum = Number(lst1?.val || 0) + Number(lst2?.val || 0) + reminder;
    const newNodeValue = sum % 10;
    const nextReminder = Math.trunc(sum / 10);
    const newLastNode = new ListNode(newNodeValue, lastNode);
    return sumLists(lst1?.next || null, lst2?.next || null, nextReminder, newLastNode);
}

// we can remove that and just call sumLists, but I wanted to keep the same signature that the question supplied
 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return sumLists(l1, l2, 0);
};

// this is just for my lazy local setup
const main = () => {
    const lst1 = createLinkedList(1);
    const lst2 = createLinkedList(7);
    console.log(getNumberFromList(lst1, true));
    console.log(getNumberFromList(lst2, true));
    const sumList = addTwoNumbers(lst1, lst2);
    console.log(getNumberFromList(sumList));
}
export default main;