// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.
function sortBy(arr, fn) {
    var sortedArr = [];
    var arrAtual = arr.slice();
    var inc = 0;
    for (var i = 0; i < arrAtual.length; i++) {
        var indexOk = arrAtual;
        var prevNumber = fn(arr[i]);
        var nextNumber = fn(arr[i + 1]);
        if (arrAtual.length === 0) {
            sortedArr.push(prevNumber);
            arrAtual.splice(arrAtual.indexOf(arr[1]), 1);
        }
        if (nextNumber && prevNumber < nextNumber) {
            console.log('adionado');
            sortedArr.push(prevNumber);
            arrAtual.splice(arrAtual.indexOf(arr[1]), 1);
            console.log('atual', arrAtual);
        }
        else {
            console.log('reverteu');
            arrAtual.reverse();
        }
        if (i === arrAtual.length) {
            console.log('i ', i);
            i = 0;
        }
    }
    console.log(sortedArr);
    return sortedArr;
}
;
var fn = function (x) { return x; };
sortBy([5, 4, 1, 2, 3], fn);
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
