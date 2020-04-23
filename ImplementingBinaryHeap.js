//index 0 = null
//left child = i * 2
//right child = i * 2 +1
//parent = Math.floor(i/2)

let MinHeap = function() {
    let heap = [null]
    this.insert = function(num) {
        heap.push(num) //add number to the heap
        if(heap.length > 2) { //if something has been added to the heap...
            let idx = heap.length-1 //let idx be last value/slot in the array
            while(heap[idx] < heap[Math.floor(idx/2)]) { //while the last value is less than its parent
                if(idx >= 1) { //if the idx is greater than or equal to 1 (meaning not 0 because our 0th index needs to be null
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]] //swap the parent and the idx
                    if(Math.floor(idx/2) > 1) { // if the parent node is not the root node
                        idx = Math.floor(idx/2) //the idx is now refers to the parent node (which is still the idx we passed in)
                    } else {
                        break
                    }
                }
            }
        }
    }

    this.remove = function() {
        let smallest = heap[1]
        if(heap.length > 2) {
            heap[1] = heap[heap.length-1]
            heap.splice(heap.length-1)
            if(heap.length == 3) {
                if(heap[1] > heap[2]) {
                    [heap[i], heap[2]] = [heap[2], heap[1]]
                }
                return smallest
            }
            let i = 1; //root node
            let left = 2 * i //left child
            let right = 2 * i + 1 //right child
            while(heap[i] >= heap[left] || heap[i] >= heap[right]) { //if rootnode is greater than left or right
                if(heap[left] < heap[right]) { //if left is less than right
                    [heap[i], heap[left]] = [heap[left], heap[i]] //then swap root and left
                    i = 2 * i //update index
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]] //else swap root and right
                    i = 2 * i + 1 //update index
                }
                left = 2 * i //update new left
                right = 2 * i + 1 //update new right
                if(heap[left] === undefined || heap[right] === undefined) { //if left or right is undefined, that means we have reached the bottom
                    break;
                }
            }
        } else if (heap.length == 2) { //there were only 1 element to begin with
            heap.splice(1, 1)
        } else {
            return null //heap was empty to begin with
        }
        return smallest //return smallest that we grabbed earlier
    }

    //You would add on this method for Heap Sort, the difficult part is writing out the actual heap structure above.
    //Heap sort = O(n log n)
    this.sort = function() {
        let result = new Array() //result = new array
        while(heap.length > 1) {
            result.push(this.remove()) //while heap still has nodes, push each node into the result array while removing it from heap
        } 
        return result //return result array
    }
}