class Queue {
  constructor(initialItems = []) {
    this.offset = 0
    this.data = new Map()

    initialItems.forEach((item, index) => {
      this.data.set(index, item)
    })
  }

  enqueue(item) {
    const current = this.offset + this.length()
    this.data.set(current, item)
  }

  dequeue() {
    if (this.length() > 0) {
      const dequeued = this.data.get(this.offset)
      this.data.delete(this.offset)
      this.offset += 1
      return dequeued
    }
  }

  first() {
    return this.data.get(this.offset)
  }

  last() {
    return this.data.get(this.offset + this.length() - 1)
  }

  length() {
    return this.data.size
  }

  empty() {
    return this.data.size === 0
  }
}

module.exports = Queue
