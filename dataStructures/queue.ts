// class Queue {
//     collection: Array<any>;
//     constructor() {
//         this.collection = []
//     }
//     enqueue(item) {
//         return this.collection.push(item)
//     }
//     dequeue() {
//         return this.collection.shift()
//     }
//     front() {
//         return this.collection[0]
//     }
//     size() {
//         return this.collection.length
//     }
//     isEmpty() {
//         return this.collection.length === 0
//     }
//     print() {
//         console.log(this.collection)
//     }
// }

// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log(queue.front())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.size())
// console.log(queue.isEmpty())
// queue.print()

class PriorityQueue {
    collection: Array<{
        priority: number;
        value: any;
    }>

    constructor() {
        this.collection = []
    }

    enqueue(item: {
        priority: number;
        value: any;
    }) {
        if (this.collection.length === 0) {
            this.collection.push(item)
            return;
        }
        let added = false;
        // higher priority should be ahead of lower
        for (let i = 0; i < this.collection.length; i++) {
            // const itemIndex = this.collection.findIndex(v => item.priority > v.priority)
            // if (itemIndex !== -1) {
            //     // this.collection = [...this.collection.slice(0, itemIndex - 1), item, ...this.collection.slice(itemIndex + 1)]
            //     this.collection.splice(itemIndex, 0, item)
            // } else {
            //     this.collection.push(item)
            // }
            if(item.priority > this.collection[i].priority) {
                this.collection.splice(i, 0, item)
                added = true
                break;
            }
        }
        if (!added) this.collection.push(item)
    }

    dequeue() {
        return this.collection.shift()
    }

    front() {
        return this.collection[0]
    }

    size() {
        return this.collection.length
    }

    isEmpty() {
        return this.collection.length === 0
    }

    print() {
        console.log(this.collection)
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue({ priority: 1, value: 1 })
priorityQueue.enqueue({ priority: 2, value: 2 })
priorityQueue.enqueue({ priority: 3, value: 3 })
priorityQueue.enqueue({ priority: 4, value: 4 })
priorityQueue.enqueue({ priority: 5, value: 5 })
priorityQueue.enqueue({ priority: 6, value: 6 })
priorityQueue.enqueue({ priority: 7, value: 7 })
priorityQueue.enqueue({ priority: 8, value: 8 })
priorityQueue.enqueue({ priority: 9, value: 9 })
console.log(priorityQueue.front())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
priorityQueue.enqueue({ priority: 100, value: 10})
priorityQueue.enqueue({ priority: 1, value: 10 })
priorityQueue.enqueue({priority: 5, value: 12})
console.log(priorityQueue.front())
priorityQueue.print()
console.log(priorityQueue.size())
