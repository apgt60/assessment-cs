// Runtime Complexity: O(n^2)
// Space Complexity: O(1)
const addToZero = (array1) => {
    for(let i=0; i < array1.length; i++){
        for(let j=0; j < array1.length; j++){
            if(array1[i] + array1[j] == 0){
                return true
            }
        }
    }
    return false
}

let array1 = [3,4,2,5,7]
let array2 = [0,-3,2,5,3]

console.log("addToZero(array1):", addToZero(array1))
console.log("addToZero(array2):", addToZero(array2))

// Runtime Complexity: O(n^2)
// Space Complexity: O(1)
const hasUniqueChars = (inputString) => {
    const stringArr = inputString.split('')
    for(let i=0; i < stringArr.length; i++){
        for(let j=0; j < stringArr.length; j++){
            if(i != j && stringArr[i] === stringArr[j]){
                return true
            }
        }
    }
    return false
}

console.log("hasUniqueChars('Monday'):", hasUniqueChars('Monday'))
console.log("hasUniqueChars('Moonday'):", hasUniqueChars('Moonday'))

// Runtime Complexity: O(n)
// Space Complexity: O(1)
const isPangram = (inputString) => {
    const allAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i=0; i < inputString.length; i++){
        const idx = allAlphabet.indexOf(inputString[i])
        if(idx >= 0){
            allAlphabet.splice(idx, 1)
        }

        if(allAlphabet.length == 0){
            return true
        }
    }
    return false
}

const pangramString = "The quick brown fox jumps over the lazy dog!"
const notPangramString = "I like cats, but not mice"

console.log("isPangram(pangramString):", isPangram(pangramString))
console.log("isPangram(notPangramString):", isPangram(notPangramString))

// Runtime Complexity: O(n)
// Space Complexity: O(1)
const findLongestWord = (inputArr) => {
    let maxSize = 0
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i].length > maxSize){
            maxSize = inputArr[i].length
        }
    }
    return maxSize
}

console.log("findLongestWord(['Hi', 'Hello']):", findLongestWord(['Hi', 'Hello there']))