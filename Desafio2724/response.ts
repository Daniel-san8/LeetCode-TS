// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    const sortedArr: JSONValue[] = []
    const arrAtual = arr.slice()
    let inc = 0
    for (let i = 0; i < arrAtual.length; i++) {
        let indexOk = arrAtual
        let prevNumber = fn(arr[i])
        let nextNumber = fn(arr[i + 1])
        if(arrAtual.length === 0) {
            sortedArr.push(prevNumber)
            arrAtual.splice(arrAtual.indexOf(arr[1]), 1)
        }
        if(nextNumber && prevNumber < nextNumber) {
            console.log('adionado')
            sortedArr.push(prevNumber)
            arrAtual.splice(arrAtual.indexOf(arr[1]), 1)
            console.log('atual', arrAtual)
            
        } else {
            console.log('reverteu')
            arrAtual.reverse()
        }
        if(i  === arrAtual.length) {
            console.log('i ', i)
            i = 0
        }
        
    }
    console.log(sortedArr)
    return sortedArr
};

const fn = (x: number) => x
sortBy([5,4,1,2,3], fn)



// let prevNumber = fn(arr[i])
//         let nextNumber = fn(arr[i + 1])
//         if(nextNumber && prevNumber < nextNumber) {
//             sortedArr.push(prevNumber)
//             arrAtual.splice(prevNumber + 1, 1, undefined)
//         } else if(nextNumber === undefined) {
//             if(prevNumber < arrAtual[inc]) {
//                 sortedArr.push(prevNumber)
//                 arrAtual.splice(prevNumber + 1, 1, undefined)
                
//             } else if (prevNumber < arrAtual[++inc]) {
//                 sortedArr.push(prevNumber)
//                 arrAtual.splice(prevNumber + 1, 1, undefined)
//             }
//         }