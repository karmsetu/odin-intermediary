

function reursivePow(int1, int2) {
    if(int2 == 1) {
        return int1
    } else {
        return int1 * reursivePow(int1, int2 - 1)
    }
}

function shorterRecursivePow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }

//   The maximal number of nested calls (including the first one) is called recursion depth. In our case, it will be exactly n.

//   The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000


let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }



function recursiveSumRange(number) {
    if(number == 1) {
        return 1
    } else {
        return number += recursiveSumRange(number-1)
    }
}


function recursiveFactorial(number) {
    if (number == 1) {
        return 1
    } else {
        return number * recursiveFactorial(number-1)
    }
}
  

function recursiveCheck(paramsArray, number) {
    if(paramsArray.length != 0 ){
        if(paramsArray[paramsArray.length-1] < number) {
            return true
            console.log(`caugth`)
        } else {
            // return true
            paramsArray.pop()
            recursiveCheck(paramsArray, number)
        }

    } else {
        return false
    }

}


function recursiveArrayMul(paramsArray) {
    if(paramsArray.length == 1) {
        return paramsArray[0]
    }
    let recursiveInpArray = [...paramsArray]
    recursiveInpArray.pop()
    return paramsArray[paramsArray.length -1] * recursiveArrayMul(recursiveInpArray)
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        // something: 'foo2'
                    }
                }
            }
        }
    }
}


function recursiveObjectCheck(array, params) {
    let keys = Object.keys(array);
    let newArrayParams = eval(`array.${keys}`)
    console.log(keys)
    console.log(typeof(newArrayParams))
    console.log(newArrayParams)
    if (newArrayParams === params) {
        return newArrayParams
    } else {
        console.log(`failed `)

        recursiveObjectCheck(newArrayParams, params)
    }
}

// console.log(recursiveObjectCheck(nestedObject,8))  


function recursiveMergeSort(paramsArray) {
    
}