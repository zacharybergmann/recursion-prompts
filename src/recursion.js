// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if(n < 0) {
        return null;
    }
    return n > 0 ? n * factorial(n - 1) : 1;
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if(array.length === 0) return 0;
    return array[0] + sum(array.slice(1)); 
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if(!array.length) return 0;
    if(typeof array[0] === 'number')
        return array[0] + arraySum( array.slice(1) );
    if(Array.isArray(array[0])) {
        return arraySum( array[0].concat( array.slice(1) )  );
    }    
};

// 4. Check if a number is even.
var isEven = function(n) {
    if(Math.abs(n) > 0)  {  //abs value of num > 0
        if(Math.abs(n) - 2 === 0) {
            return true;
        }
        if(Math.abs(n) - 2 === -1) {
            return false;
        }
        return n > 0 ? isEven(n - 2) : isEven(n + 2);
    }
    return true; //case where n is 0
    
};

// 5. Sum all integers between a given value (excluding that value) and zero.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0 || Math.abs(n) === 1) return 0;
    if (Math.abs(n) > 0) return n > 0 ? n + sumBelow(n-1) - 1 : n + sumBelow(n + 1) + 1;
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    if (x === y) return [];
    if(x === y + 1 || x === y - 1) {
        return [];
    }
    if(Math.abs(x) >= Math.abs(y)) {
        if(x > y){   // ie 9 , 2
            return [x - 1].concat(range(x - 1, y));
        } else { // ie. -9 , 2
            return [x + 1].concat(range(x + 1, y));
        }
    }
    if(Math.abs(x) <= Math.abs(y)) {
        if(x > y){   //ie  1 , -3
            return [x - 1].concat(range(x - 1, y))
        } else {  //ie. -1 3
            return [x + 1].concat(range(x + 1, y));
        }
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp === 0) return 1;
    if(exp < 0) return 1 / base * exponent(base, exp + 1).toLocaleString(undefined, {minimumFractionDigits: 4, maximumFractionDigits: 4});
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n === 0) return false;
    if (n === 1) return true;
    if(n > 1) {
        return powerOfTwo(n/2);
    } else {
        return false;
    }    
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    var index = Array.from(arguments)[1] || 0;
    var result = Array.from(arguments)[2] || string;
    if(index === string.length) return result.slice(string.length);
  
    result += string[string.length - 1 - index];
    return reverse(string, ++index, result);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    var string2 = string.toUpperCase();
    string2 = string2.replace(/[^A-Z0-9]/g, "");
    if(string2[0] === string2[string2.length - 1]) {
        if (string2.length !== 2 && string2.length !== 3) {
            string2 = string2.split("");
            string2.pop();
            string2 = string2.slice(1);
            palindrome(string2.join(""));
        }
        return true;
    }
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if(y === 0) return NaN;
    if(x === 0) return 0;
    if(x > 0) {
        if(y > 0) {
            return x < y ? x : modulo(x-y, y);
        }
        return x < -y ? x : modulo(x - y, y);
    } else {
        if(y > 0) {
            return -x < y ? x : modulo(x + y, y);
        }
        return -x < -y ? x : modulo(x - y , y);
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if(x === 0 || y === 0) return 0;
    if(x > 0 && y > 0 || x < 0 && y < 0) {
            if (x === 1 ) {
                return y;
            } else if(x === -1) {
                return -y;
            }
            return x > 0 ? y + multiply(x-1, y) : -y + multiply(x + 1 , y); 
    } else {
        if (x === 1 ) {
                return y;
            } else if(x === -1) {
                return -y;
            }
        return x > 0 ? y + multiply(x - 1, y) : -y + multiply(x + 1, y);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    if (y === 0) return NaN;
    if(x === 0) return 0;
    if(x > 0 && y > 0 || x < 0 && y < 0) {  
        if(x > 0) { 
            if(x > y) return 1 + divide(x - y, y);
            if(x === y) return 1;
            return 0;
        } else { 
            if(x < y) return 1 + divide(x - y, y);
            if(x === y) return 1;
            return 0;
        }
    } else {
        if(x > 0) { 
            if(x > -y) return -1 + divide(x - -y, y);
            if(x === -y) return -1;
            return 0;
        } else { 
            if(-x > y) return -1 + divide(x + y, y);
            if(x === -y) return -1;
            return 0;
        }
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    //take the larger of the two numbers
    //check divisibility of that number with the other number
    if(x < 0 || y < 0) return null;
    if(x === 0 && y === 0) return 0;
    if(x === 0) return y;
    if(y === 0) return x;
    
    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(str1 === "" && str2 === "") return true;
    if(str1 === "" || str2 === "") return false;
    // if(str1.length !== str2.length) return false;
    var ind = Array.from(arguments)[2] || 0;
    if(str1[ind] === str2[ind]){
        if(ind === str1.length - 1) {
            if(str1.length === str2.length)
                return true;
            return false;    
        }    
        return compareStr(str1, str2, ++ind);
    return false;    
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if(str.length === 0) return [];
    return [].concat(str.slice(0, 1), createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    var ind = Array.from(arguments)[1] || array.length;
    var result = Array.from(arguments)[2] || [];
    result.push(array[ind - 1]);
    if(ind === 1) {
        return result;
    } 
    return reverseArr(array, --ind, result);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if(length === 0) return [];
    return [value].concat(buildList(value, --length));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    var index = Array.from(arguments)[2] || 0;
    var count = Array.from(arguments)[3] || 0;
    if(array[index] === value) count++;
    if(index === array.length - 1) return count;
    return countOccurrence(array, value, ++index, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    var index = Array.from(arguments)[2] || 0;
    if(index === array.length) return [];
    return [callback(array[index], index, array)].concat(rMap(array, callback, ++index));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, findKey) {
    var tempVals = Array.from(arguments)[2] || [obj];
    var tempKeys = Array.from(arguments)[3] || [];
    if(tempVals.some(function(mbObj){return typeof mbObj === 'object'})) {
        var newTempVals = [];
        var newTempKeys = tempKeys;
        tempVals.forEach(function(objMb){
            if(typeof objMb === 'object') {
                var keysThis = Object.keys(objMb);
                newTempKeys = newTempKeys.concat(keysThis);
                keysThis.forEach(function(key){
                    newTempVals.push(objMb[key]);
                });
            } 
        });
        return countKeysInObj(obj, findKey, newTempVals, newTempKeys);
    }
    return tempKeys.reduce(function(sumKeyOccurs, curKey){return curKey === findKey ? ++sumKeyOccurs : sumKeyOccurs;}, 0);
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var tempVals = Array.from(arguments)[2] || [obj];
    if(tempVals.some(function(mbObj){return typeof mbObj === 'object'})) {
        var newTempVals = tempVals.filter(function(tempval){return typeof tempval !== 'object'});  //remove objects
        var objVals = tempVals.filter(function(tempvall){return typeof tempvall === 'object'});  //get the objects
        //get the keys for each object in objVals
        //access the values of each obj in objVals and put it in newTempVals
        objVals.forEach(function(objie){
            var keys = Object.keys(objie);
            keys.forEach(function(key){
                newTempVals.push(objie[key]);
            });
        });

        return countValuesInObj(obj, value, newTempVals);        
    }
    return tempVals.reduce(function(sumValOccurs, curVal){return curVal === value ? ++sumValOccurs : sumValOccurs;}, 0);
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    

};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    var index = Array.from(arguments)[1] || 1;
    var prev = Array.from(arguments)[2] || 0;
    var current = Array.from(arguments)[3] || 1;
    var result = Array.from(arguments)[4] || [0, 1];
    if(n === 0) return null;
    if(n < 0) return null;
    if(n === result.length - 1) return result;
    result.push(prev + current);
    return fibonacci(n, ++index, current, prev + current, result);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n < 0) return null;
    if(n === 0) return 0;
    var ind = Array.from(arguments)[1] || 1;
    var prev = Array.from(arguments)[2] || 0;
    var curr = Array.from(arguments)[3] || 1;
    if(ind === n) return curr;
    return nthFibo(n, ++ind, curr, curr + prev);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    var index = Array.from(arguments)[1] || 0;
    if(input.length === 0) return input;
    if(index === input.length) return [];
    return [input[index].toUpperCase()].concat(capitalizeWords(input, ++index));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    var index = Array.from(arguments)[1] || 0;
    if(array.length === 0) return array;
    if(index === array.length) return [];
    return [array[index][0].toUpperCase() + array[index].slice(1)].concat(capitalizeFirst(array, ++index));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var tempVals = Array.from(arguments)[1] || [obj];
    if(tempVals.some(function(mbObj){return typeof mbObj === 'object'})) {
        var newTempVals = tempVals.filter(function(tempval){return typeof tempval !== 'object'});  //remove objects
        var objVals = tempVals.filter(function(tempvall){return typeof tempvall === 'object'});  //get the objects
        //get the keys for each object in objVals
        //access the values of each obj in objVals and put it in newTempVals
        objVals.forEach(function(objie){
            var keys = Object.keys(objie);
            keys.forEach(function(key){
                newTempVals.push(objie[key]);
            });
        });
        console.log('at return');
        return nestedEvenSum(obj, newTempVals);        
    }
    console.log(tempVals);
    return tempVals.reduce(function(sumValOccurs, curVal){return curVal % 2 === 0 ? sumValOccurs + curVal : sumValOccurs;}, 0);
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    var flatterArray = Array.from(arguments)[1] || arrays;
    if(flatterArray.reduce(function(isFlatYet, curArrVal){return isFlatYet === false || Array.isArray(curArrVal) ? false : true;}, true))
        return flatterArray;
    return flatten(arrays, flatterArray.reduce(function(bitFlatter, curArrVal){return bitFlatter.concat(curArrVal);}, []));    
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    if (obj === undefined) obj = {};
    var index = Array.from(arguments)[2] || 0;
    if(index === str.length) return obj;
    if(obj.hasOwnProperty(str[index]))
        return letterTally(str, obj, ++index);
    
    obj[str[index]] = str.split("").reduce(function(letterInsts, curLetter){
        return curLetter === str[index] ? letterInsts + 1 : letterInsts   }, 0);

    return letterTally(str, obj, ++index);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    var index = Array.from(arguments)[1] || 0;
    var result = Array.from(arguments)[2] || [];
    if(index === list.length) return result;
    if(result[result.length - 1] === list[index]) return compress(list, ++index, result); 
    result.push(list[index]);
    return compress(list, ++index, result);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    var index = Array.from(arguments)[2] || 0;
    var result = Array.from(arguments)[3] || [];
    if(index === array.length) return result;
    result.push(array[index].concat(aug));
    return augmentElements(array, aug, ++index, result);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    var index = Array.from(arguments)[1] || 0;
    var result = Array.from(arguments)[2] || [];
    if(index === array.length) return result;
    if(result[result.length - 1] === array[index] && array[index] === 0) return minimizeZeroes(array, ++index, result); 
    result.push(array[index]);
    return minimizeZeroes(array, ++index, result);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    var index = Array.from(arguments)[1] || 0;
    var result = Array.from(arguments)[2] || [];
    if(index === array.length) return result;
    if(index % 2 === 0)
        result.push(Math.abs(array[index]));
    if(index % 2 !== 0)
        result.push(-Math.abs(array[index]));    
    return alternateSign(array, ++index, result);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var ind = Array.from(arguments)[1] || 0;
    var newStr = Array.from(arguments)[2] || "";

    var splitter = str.split(" ");
    if(ind === splitter.length) return newStr.trim();

    var changeMe = splitter[ind];

    if(changeMe === '1') return numToText(str, ++ind, newStr + " one");
    if(changeMe === '2') return numToText(str, ++ind, newStr + " two");
    if(changeMe === '3') return numToText(str, ++ind, newStr + " three");
    if(changeMe === '4') return numToText(str, ++ind, newStr + " four");
    if(changeMe === '5') return numToText(str, ++ind, newStr + " five");
    if(changeMe === '6') return numToText(str, ++ind, newStr + " six");
    if(changeMe === '7') return numToText(str, ++ind, newStr + " seven");
    if(changeMe === '8') return numToText(str, ++ind, newStr + " eight");
    if(changeMe === '9') return numToText(str, ++ind, newStr + " nine");

    return numToText(str, ++ind, newStr + " " + changeMe);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
    if(array === [target]) return min;
    if(array.length === 1 && array[0] !== target) return null;
    var findMiddle = Math.floor(array.length / 2);
    var arr1stHalf = array.slice(0, findMiddle);
    var arr2ndHalf = array.slice(findMiddle);
    if(target < arr1stHalf[arr1stHalf.length - 1]) return binarySearch(arr1stHalf, target, 0, findMiddle - 1);
    if(target === arr1stHalf[arr1stHalf.length - 1]) return findMiddle - 1;
    if(target > arr2ndHalf[0]) return binarySearch(arr2ndHalf, target, findMiddle, array.length - 1);
    if(target === arr2ndHalf[0]) return findMiddle;
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {

};
