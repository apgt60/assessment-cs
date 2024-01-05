const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let extraLargeArray_append = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let extraLargeArray_insert = perf.stop();

perf.start();
doublerAppend(largeArray);
let largeArray_append = perf.stop();

perf.start();
doublerInsert(largeArray);
let largeArray_insert = perf.stop();

perf.start();
doublerAppend(mediumArray);
let mediumArray_append = perf.stop();

perf.start();
doublerInsert(mediumArray);
let mediumArray_insert = perf.stop();

perf.start();
doublerAppend(smallArray);
let smallArray_append = perf.stop();

perf.start();
doublerInsert(smallArray);
let smallArray_insert = perf.stop();

perf.start();
doublerAppend(tinyArray);
let tinyArray_append = perf.stop();

perf.start();
doublerInsert(tinyArray);
let tinyArray_insert = perf.stop();


console.log("append_results")
console.log("tinyArray_append", tinyArray_append.preciseWords);
console.log("smallArray_append", smallArray_append.preciseWords);
console.log("mediumArray_append", mediumArray_append.preciseWords);
console.log("largeArray_append", largeArray_append.preciseWords);
console.log("extraLargeArray_append", extraLargeArray_append.preciseWords);

console.log("insert results")
console.log("tinyArray_insert", tinyArray_insert.preciseWords);
console.log("smallArray_insert", smallArray_insert.preciseWords);
console.log("mediumArray_insert", mediumArray_insert.preciseWords);
console.log("largeArray_insert", largeArray_insert.preciseWords);
console.log("extraLargeArray_insert", extraLargeArray_insert.preciseWords);


/**
 * TIMING RESULTS:
 *  append_results
    tinyArray_append 958 ns
    smallArray_append 834 ns
    mediumArray_append 5.459 μs
    largeArray_append 50.584 μs
    extraLargeArray_append 3.05725 ms

    insert results
    tinyArray_insert 398.042 μs
    smallArray_insert 2.708 μs
    mediumArray_insert 62.625 μs
    largeArray_insert 5.011417 ms
    extraLargeArray_insert 638.6215 ms
 */

/**
 * ANSWERS:
 * Append scales better than insert.  As the input arrays get larger, the time goes up more linearly for append while it goes
 * up more exponentially for insert.  The difference is most evident when comparing the time it takes for largeArray vs extraLargeArray
 * for each function.  It is a very small difference for the smaller arrays.
 * 
 * Extra Credit:
 * Insert is slower because it is inserting at the beginning the of the returned array, which causes the entire array to be re-indexed.
 * Append is faster because it adds to the end of the array and only has to apply an index to the appended element.
 */

