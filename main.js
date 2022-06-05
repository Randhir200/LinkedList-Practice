class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.lastNode = null;
  }

  addNodeEnd(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.head = node;
      this.lastNode = node;
    } else {
      this.lastNode.next = node;
      this.lastNode = node;
    }
    this.size++;
  }

  addNodeBegin(val) {
    let node = new Node(val);
    if (this.size == 0) {
      this.head = node;
      this.lastNode = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  deleteAtBegin() {
    if (this.size === 0) {
      console.log('LinkesList is empty');
      return;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.size--;
      console.log(temp.val);
    }
  }
  deleteAtEnd() {
    if (this.size === 0) {
      console.log('LinkedList is Empty');
    } else {
      let tempHead = this.head;
      while (tempHead.next.next) {
        tempHead = tempHead.next;
      }
      tempHead.next = null;
      this.size--;
      this.lastNode = tempHead;
    }
  }

  traverse(req) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != req) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  addAtPos(pos, val) {
    let node = new Node(val);
    let leaderNode = this.head;
    let count = 0;
    while (count != pos - 1) {
      leaderNode = leaderNode.next;
      count++;
    }
    let nextNode = leaderNode.next;
    leaderNode.next = node;
    node.next = nextNode;
  }
  reverse() {
    let first = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    // this.head.next = null
    return first;
  }
}

let l1 = new LinkedList();
l1.addNodeEnd(10);
l1.addNodeEnd(20);
l1.addNodeEnd(30);
console.log(l1.reverse());
// console.log(l1);
