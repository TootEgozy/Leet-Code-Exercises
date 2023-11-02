// Link to the question: https://leetcode.com/problems/merge-k-sorted-lists/

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeKLists = (lists: ListNode[], solutionListNode?: ListNode, lastSolutionNode?: ListNode): ListNode | [] => {
  if(!lists.length) return [];

  // splice out the node with the first smallest value
  const minVal = Math.min(...lists.map((node) => node.val));
  const minNodeIndex = lists.findIndex((node) => node.val === minVal);
  const minNode = lists.splice(minNodeIndex, 1)[0];

  // create a new node
  const newNode = new ListNode(minVal);

  // if a solution list exists, attach the new node to the end
  if(lastSolutionNode) {
    lastSolutionNode.next = newNode;
  }

  // if there are more nodes to the used list, remove the node with the used value and add the list back
  if(minNode.next !== null) lists.push(minNode.next);

  // check if all the lists are done, if so return the solution. else run again with the remaining lists
  if(!lists.length) return solutionListNode || newNode;
  return mergeKLists(lists, solutionListNode || newNode, newNode);
};

export { mergeKLists }