import { expect } from "chai";
import { mergeKLists, ListNode } from "./index";

const createLinkedList = (values: number[]): ListNode => {
  let node: ListNode | null = null;
  values.reverse().forEach((val: number) => {
    const newNode = new ListNode(val, node);
    node = newNode;
  });
  return node as unknown as ListNode;
}

const valuesFromList = (lstnode: ListNode | null, valArr: number[] = []): number[] => {
  if(lstnode === null) return valArr;
  valArr.push(lstnode.val);
  return valuesFromList(lstnode.next, valArr);
}

describe('23: Merge K Sorted lists', () => {
  it('should combine two linked lists', () => {
    const lists = [createLinkedList([1, 3, 5]), createLinkedList([2, 4])];
    const result = mergeKLists(lists);
    expect(valuesFromList(result as ListNode)).to.eql([1, 2, 3, 4, 5]);
  });

  it('should combine linked lists with duplicates', () => {
    const lists = [createLinkedList([3, 3, 9]), createLinkedList([3, 10])];
    const result = mergeKLists(lists);
    expect(valuesFromList(result as ListNode)).to.eql([3, 3, 3, 9, 10]);
  });

  it('should combine multiple linked lists', () => {
    const lists = [
      [1, 5, 14],
      [3],
      [200],
      [5, 5, 10],
      [11, 12, 13, 14],
      [1]
    ].map((values) => createLinkedList(values));
    const result = mergeKLists(lists);
    expect(valuesFromList(result as ListNode)).to.eql([1, 1, 3, 5, 5, 5, 10, 11, 12, 13, 14, 14, 200]);
  });

  it('should combine a single list', () => {
    const lists = [createLinkedList([3, 3, 9])];
    const result = mergeKLists(lists);
    expect(valuesFromList(result as ListNode)).to.eql([3, 3, 9]);
  });

  it('should return an empty array for no lists', () => {
    const result = mergeKLists([]);
    expect(result).to.eql([]);
  });

  // I didn't write code or tests for example 3 of the question, where my input is: [[], []]
  // Or for a case where I have both empty arrays and listNodes in the K lists
  // Because it's a random input that is not related to the question,
  // since in JS a listNode is represented by an object

});