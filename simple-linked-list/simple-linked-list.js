/* eslint-disable import/prefer-default-export,no-use-before-define,no-param-reassign */

export class List {
  push(el) {
    if (!this.head) {
      this.head = el;
      this.last = el;
    } else {
      this.last.next = el;
      this.last = el;
    }
  }

  unshift(el) {
    el.next = this.head;
    this.head = el;
    if (!this.last) {
      this.last = el;
    }
  }

  shift() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    if (!this.head) {
      this.last = undefined;
    }
  }

  pop() {
    const last = this.last;
    if (this.head === this.last) {
      this.head = undefined;
      this.last = undefined;
      return last;
    }
    // search for the element before last
    for (let el = this.head; el; el = el.next) {
      if (el.next === last) {
        el.next = undefined;
        this.last = el;
        return last;
      }
    }
    return undefined;
  }

  toArray() {
    const array = [];
    for (let el = this.head; el; el = el.next) {
      array.push(el.value);
    }
    return array;
  }

  reverse() {
    if (this.head === this.last) {
      return;
    }
    let prev = this.head;
    let el = prev.next;
    while (el) {
      const next = el.next;
      el.next = prev;
      prev = el;
      el = next;
    }
    const head = this.head;
    this.head = this.last;
    this.last = head;
    this.last.next = undefined;
  }

  static fromArray(array) {
    const list = new List();
    array.forEach(value => list.push(new Element(value)));
    return list;
  }
}

export class Element {
  constructor(value, next) {
    if (value == null) {
      throw new ElementValueRequiredException();
    }
    if (next !== undefined && !(next instanceof Element)) {
      throw new ElementNextNotInstanceException();
    }
    this.value = value;
    this.next = next;
  }
}

export class ElementValueRequiredException {
}

export class ElementNextNotInstanceException {
}

