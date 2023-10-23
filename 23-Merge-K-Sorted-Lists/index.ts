// Link to the question: https://leetcode.com/problems/merge-k-sorted-lists/

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists: Array<ListNode>): ListNode {
  // construct a new linkedlist from listnodes
  // iterate over the linkedlists at once, in each step:
  // compare the values and pick the first smallest
  // add it to the solution linkedlist and progress the list to the next step
  // repeat until all lists are null
};