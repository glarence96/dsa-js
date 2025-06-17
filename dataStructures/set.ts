class MySet {
    collection: {
        [key: string | number]: boolean
    };
    size: number;
    constructor() {
        this.collection = {};
        this.size = 0;
    }

    add(val: string | number) {
        this.collection[val] = true;
        this.size++;
    }

    remove(val: string | number) {
        delete this.collection[val];
        this.size--;
    }

    has(val: string | number) {
        return this.collection[val];
    }

    values() {
        return Object.keys(this.collection);
    }

    union(set: MySet) {
        const unionSet = new MySet();
        for (const val of this.values()) {
            unionSet.add(val);
        }
        for (const val of set.values()) {
            unionSet.add(val);
        }
        return unionSet;
    }

    intersection(set: MySet) {
        const intersectionSet = new MySet();
        for (const val of this.values()) {
            if (set.has(val)) {
                intersectionSet.add(val);
            }
        }
        return intersectionSet;
    }

    isSubset(set: MySet) {
        let result = true
        for (const val of this.values()) {
            if (!set.has(val)) {
                result = false;
                break;
            }
        }
        return result
    }
};

const s1 = new MySet();
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(4);
s1.add(5);

const s2 = new MySet();
s2.add(1);
s2.add(2);
s2.add(3);

const s3 = new MySet();
s3.add(6);
s3.add(7);
s3.add(8);

console.log(s1.isSubset(s2));
console.log(s2.isSubset(s1));
console.log(s3.isSubset(s1));
console.log(s1.union(s2).union(s3).values());
console.log(s1.intersection(s2).values());