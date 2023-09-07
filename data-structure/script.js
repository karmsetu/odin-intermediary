console.log(`data Structure`)

// types of data structure

// Array
// linkedList
// record- tuple or struct
// hash tables/ maps
// graphs
// stacks & queue
// trees
// trie



// Depth-first search
// Breadth-first search
// Writing sorting algorithms


class Node{
    constructor (value) {
        this.value = value
        // this.nextNode = nextNode
    }
    nextNode 
} 

class linkedList {
    head = null
    tail = null
    append = (params) => {
        if (!this.head) {
            let toBeAddedHead = new Node(params)
            // console.log(`no head`)
            this.head = toBeAddedHead
        } else {
            function recursiveCheck(Rparams) {
                if (!Rparams.nextNode) {
                    // console.log(`adding sibling`)
                    let toBeAddedNode = new Node(params)
                    Rparams.nextNode = toBeAddedNode

                } else {
                    let keys = Object.keys(Rparams);
                    // console.log(keys[0])
                    // console.log(Rparams)
                    recursiveCheck(eval(`Rparams.${keys[0]}`))
                }
            }
            recursiveCheck(this.head)
        }
         
    }

    toString =()=> {
        var index = -1
        let returnValue
        function recursiveCall(head) {
            let callStatement
            if (!head) {
                // console.log(`[${index}]:${head.value} -> ${recursiveCall(eval(`head.${Object.keys(head)[0]}`))}`)
                return `tail`
            } 
            index ++
            
            return `[${index}]:${head.value} -> ${recursiveCall(eval(`head.${Object.keys(head)[0]}`))}`
            
        }
        return recursiveCall(this.head)
    }

    size =()=> {
        var count = 0
        function recursiveCount(params) {
            if (!params) {
                return 0
            }
            count ++
            recursiveCount(eval(`params.${Object.keys(params)[0]}`))
            return count
            // return count + recursiveCount(eval(`params.${Object.keys(params)[0]}`))
        }
        return recursiveCount(this.head)
    }

    heads() {
        return this.head
    }

    at =(value)=> {
        function r(params, count) {
            var counts = count
            if(!params){
                console.error(`sorry there is no value: ${value} in the list`); 
                return false
            }
            if (counts == value) {
                return params
            } else {
                counts++
                return r(eval(`params.${Object.keys(params)[0]}`), counts)
            }
        }
        return r(this.head, 0)
    }

    pop =()=> {
        let lastItem = this.at(this.size()-2)
        lastItem.nextNode = null
        return (this)
    }

    tail =()=> {
        this.tail=  this.at(this.size()-1)
    }
}

let one = new Node(1)
let nL = new linkedList()
nL.append('a')
nL.append('b')
nL.append('c')
nL.append('d')
nL.append('e')
console.log(nL.toString())
console.log(nL.size())
console.log(nL.heads())
console.log(nL.at(3))
console.log(nL.pop())
