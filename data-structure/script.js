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
        function recursiveCall(head) {
            console.log(typeof(head))
            if (head) {
                return `tail`
            }
            index ++
            // console.log({head, index})
            console.log(`params:${head.value}, index:${index}`, {head})
            console.log(recursiveCall(eval(`head.${Object.keys(head)[0]}`)))
        }
        recursiveCall(this.head)
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