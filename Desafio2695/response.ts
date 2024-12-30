// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 

// Example 1:

// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10
// Example 2:

// Input: nums = [[23,98,42,70]], operation = "String"
// Output: "[23,98,42,70]"
// Explanation:
// const obj = new ArrayWrapper([23,98,42,70]);
// String(obj); // "[23,98,42,70]"
// Example 3:

// Input: nums = [[],[]], operation = "Add"
// Output: 0
// Explanation:
// const obj1 = new ArrayWrapper([]);
// const obj2 = new ArrayWrapper([]);
// obj1 + obj2; // 0




class ArrayWrapper {
    
    arrNum: number[] = []

    constructor(nums: number[]) {
        this.arrNum = nums
        
    }
    
    valueOf(): number {
        let count = 0
        if(this.arrNum.length === 0) return 0
        for (let i = 0; i < this.arrNum.length; i++) {
            count += this.arrNum[i]
        }
        return count
    }
    
    toString(): string {
        return `[${this.arrNum}]`
    }
};

 const obj1 = new ArrayWrapper([1,2]);
 const obj2 = new ArrayWrapper([3,4]);
 +obj1 + +obj2; // 10
 String(obj1); // "[1,2]"
 String(obj2); // "[3,4]"
 