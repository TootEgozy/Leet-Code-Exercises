// Link to the question: https://leetcode.com/problems/add-two-numbers/

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

// the function receives nodes of for the addends, the reminder of the last calculation (or 0)
// and the last result node, construct the next result node and carry on the reminder to the next iteration.
// when the addends lists end the function returns the result list.
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
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return sumLists(l1, l2, 0);
};


