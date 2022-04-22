class Heap {

    constructor(type = 'min') {
      this.storage = [];
      this.type = type === 'min' ? 'min' : 'max';
    }
   
    compare(parent, child) {
      if (this.type === 'min') {
        return this.storage[parent] <= this.storage[child];
      }
      return this.storage[parent] > this.storage[child];
    }
   
    insert(value) {
      this.storage.push(value);
      this.bubbleUp();
    }
   
    peek() {
      return this.storage[0];
    }
   
    removePeak() {
      this.swap(0, this.storage.length - 1);
      const result = this.storage.pop();
      this.bubbleDown();
      return result;
    }
   
    swap(a, b) {
      [this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
    }
   
    getParent(child) {
      return Math.floor((child - 1) / 2);
    }
   
    getChild(parent) {
      let left = parent * 2 + 1;
      if (left >= this.storage.length - 1 || this.compare(left, left + 1)) {
        return left;
      }
      return left + 1;
    }
   
    bubbleUp() {
      let child = this.storage.length - 1;
      let parent;
   
      parent = this.getParent(child);
      while (child > 0 && !this.compare(parent, child)) {
        this.swap(parent, child);
        child = parent;
        parent = this.getParent(child);
      }
    }
   
    bubbleDown() {
      let parent = 0;
      let child = this.getChild(parent);
   
      while (child < this.storage.length && !this.compare(parent, child)) {
        this.swap(parent, child);
        parent = child;
        child = this.getChild(parent);
      }
    }
   }
   
   
   var MedianFinder = function() {
     this.minHeap = new Heap('min');
     this.maxHeap = new Heap('max');
     this.size = 0;
   };
   
   /** 
    * @param {number} num
    * @return {void}
    */
   MedianFinder.prototype.addNum = function(num) {
     if (this.size % 2 === 0) {
       // size currently even
       this.minHeap.insert(num);
       let fromMinHeap = this.minHeap.removePeak();
   
       this.maxHeap.insert(fromMinHeap);
       let fromMaxHeap = this.maxHeap.removePeak();
   
       this.minHeap.insert(fromMaxHeap);
       
     } else {
       // size currently odd
       // either add num to minheap or maxheap
   
       if (num < this.minHeap.peek()) {
         this.maxHeap.insert(num);
       } else {
         this.minHeap.insert(num);
         let smallestFromMinHeap = this.minHeap.removePeak();
         this.maxHeap.insert(smallestFromMinHeap);
       }
     }
   
     this.size++;
   };
   
   /**
    * @return {number}
    */
   MedianFinder.prototype.findMedian = function() {
     if (this.size % 2 === 1) {
       // odd number of elements 
       return this.minHeap.peek();
     } else {
       // even number of elements 
       return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
     }
   };
   
   /** 
    * Your MedianFinder object will be instantiated and called as such:
    * var obj = new MedianFinder()
    * obj.addNum(num)
    * var param_2 = obj.findMedian()
   
    0 1 2 3  4  5
   [2,3,6,8,10,11]
   
   - if length is even, 
     - get length / 2 element => 8
     - get length / 2 - 1 element => 6
   
   
   Minheap
   
               2
             /
            6
   
   
   Maxheap
   
               8
             /
            3
   
   
   [2,3,6,8,10,11]
   
   
   Odd-case 
   
   Maxheap        Minheap
   [-3]           [-2,-1]
   
   
   Even-case
   
   Maxheap        Minheap
   [2,3,6]           [8,10,11]
   
   
    */