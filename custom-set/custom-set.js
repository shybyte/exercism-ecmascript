export default class CustomSet {
  constructor(array = []) {
    this.data = {};
    array.forEach(el => {
      this.data[el] = el;
    });
  }

  put(el) {
    return new CustomSet(this.toList().concat(el))
  }

  size() {
    return this.toList().length;
  }

  'delete'(elToDelete) {
    return new CustomSet(this.toList().filter(el => el !== elToDelete))
  }

  difference(otherSet) {
    return new CustomSet(this.toList().filter(el => !otherSet.member(el)));
  }

  disjoint(otherSet) {
    return this.toList().every(el => !otherSet.member(el));
  }

  intersection(otherSet) {
    return new CustomSet(this.toList().filter(el => otherSet.member(el)));
  }

  subset(otherSet) {
    return otherSet.toList().every(el => this.member(el));
  }

  union(otherSet) {
    return new CustomSet(this.toList().concat(otherSet.toList()));
  }

  toList() {
    return Object.values(this.data);
  }

  member(el) {
    return this.data.hasOwnProperty(el);
  }

  empty() {
    return new CustomSet()
  }

  eql(otherSet) {
    return JSON.stringify(this.data) === JSON.stringify(otherSet.data);
  }
}