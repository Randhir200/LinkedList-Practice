class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addNodeAtBegin(val) {
    let node = new Node(val); // {data:20, next:null}
    if (this.head == null) {
      this.head = node; //{data:10, next:null}
      this.tail = node;
    } else {
      node.next = this.head; // head = head.next
      //{data:20, n:{data:10, n:null}}
      this.head = node; //
    }
    this.size++;
  }

  addNodeAtEnd(val) {
    let node = new Node(val);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head; //
      while (temp.next != null) {
        // {data:40, next:null}
        temp = temp.next; //
      }
      //{data:40, next:null}
      temp.next = node; // {data:40, n:{data:50, next:null}}
    }
    this.size++;
  }

  deleteAtBegin() {
    if (this.head == null) {
      console.log('Empty LL');
      return;
    } else {
      // head = {data:40, n:{data:50, next:null}}, head = n:{data:50, next:null}
      this.head = this.head.next;
    }
    this.size--;
  }
  deleteAtEnd() {
    if (this.head == null) {
      console.log('Empty LL');
      return;
    } else {
      //{data:40, n:{data:50, next:null}} //
      let temp = this.head;
      while (temp.next.next != null) {
        //
        temp = temp.next;
      }
      // {data:40, {data:50, next:nulnext:l}}
      temp.next = null;
      this.size--;
    }
  }
  addAtPos(val, pos) {
    // 80, 2
    let node = new Node(val);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      //{data:40, {data:50, next:{data:20,next:{data:30, next:null}}}}
      let leaderNode = this.head;
      let nextNode = null;
      let count = 1; //
      while (count != pos) {
        // 2 !=2
        count++; //2
        leaderNode = leaderNode.next; // {data:50, next:{data:20,next:{data:30, next:null}}}
      }
      nextNode = leaderNode.next; //{data:20,next:{data:30, next:null}}
      node.next = nextNode; // {data:80, next:{data:20,next:{data:30, next:null}}}
      leaderNode.next = node; //{data:50, next:{data:80, next:null}
    }
    this.size++;
  }

  deleteAtPos(pos) {
    //2
    if (this.head == null) {
      console.log('Empty');
      return;
    } else {
      //{data:40,n: {data:50, next:{data:20,next:{data:30, next:null}}}}
      let cur = this.head;
      let nextNode = null;
      let count = 1;
      while (count != pos) {
        count++;
        cur = cur.next;
      }
      //{data:50, next:{data:20,next:{data:30, next:null}}
      nextNode = cur.next.next; //{data:30, next:null}
      cur.next = nextNode;
    }
    this.size--;
  }
}

let ll1 = new LinkedList();
ll1.addNodeAtBegin(10);
ll1.addNodeAtBegin(20);
ll1.addNodeAtBegin(30);
ll1.deleteAtPos(2);
console.log(ll1);
