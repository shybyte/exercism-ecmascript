class Bucket {
  constructor (capacity) {
    this.capacity = capacity
  }

  get space () {
    return this.capacity - this.contents
  }

  isEmpty () {
    return this.contents === 0
  }

  isFull () {
    return this.space === 0
  }

  change (quantity) {
    quantity = Math.max(-this.contents, Math.min(this.space, quantity))
    this.contents += quantity
    return quantity
  }

  empty () {
    return this.change(-this.contents)
  }

  fill () {
    return this.change(this.space)
  }

  transfer (other) {
    return this.change(-other.change(this.contents))
  }
}

export default class {
  constructor (one, two, goal, goalBucket) {
    const capacities = goalBucket === 'two' ? [two, one] : [one, two];
    [this.one, this.two] = capacities.map(c => new Bucket(c));
    [this.goal, this.goalBucket] = [goal, goalBucket]
  }

  get otherBucket () {
    return this.two.contents
  }

  move () {
    const {one, two, goal} = this
    if (one.contents === goal) return null
    if (one.isEmpty()) return one.fill()
    if (two.isFull()) return two.empty()
    return one.transfer(two)
  }

  moves () {
    let count = 0

    this.one.contents = this.two.contents = 0

    while (this.move() != null) count++

    return count
  }
}