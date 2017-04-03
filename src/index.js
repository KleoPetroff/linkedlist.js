class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      const current = this.head;
      this.head = new Node(data, current);
    }

    this.size++;
  }
}