// Hayley Robinson

// FOR EACH: executes a provided function once for each array element //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue; // skip if undefined
        callbackFn(this[i], i, this); // call function w/ all possible params
    }
};

// MAP: creates a new array populated with the results of calling a provided function on every element in the calling array.//
Array.prototype.myMap = function(callbackFn) {
    const newNum = [];
    for( let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        newNum[i] = callbackFn(this[i],i, this); // assign new values from callback func to new array
    }
    return newNum;
};

// FILTER: creates a new array with all elements that pass the test implemented by the provided function.//
Array.prototype.myFilter = function(callbackFn) {
    const newArr = [];
    for( let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue; 
        if(callbackFn(this[i],i, this)){ // if word passes test, add to filtered array
            newArr.push(this[i]);
        }
    }
    return newArr;
};

// SOME: tests whether at least one element in the array passes the test implemented by the provided function.//
Array.prototype.mySome = function(callbackFn) {
    for( let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue; 
        if(callbackFn(this[i],i, this)) return true; // if one element passes test, return true or else return false
    }
    return false;
};

// EVERY: tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. //
Array.prototype.myEvery = function(callbackFn) {
    for( let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue; 
        if(callbackFn(this[i],i, this)=== false) return false; // if any value doesnt pass test, return false
    }
    return true;
};

// REDUCE: “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element.//
Array.prototype.myReduce = function(callbackFn) {
    let j = 0;
    let total = 0;
    for(let i = 0; i< this.length; i++){
        total += callbackFn(j,this[i],i, this);
    }
    return total;
};

// INCLUDES: whether an array includes a certain value among its entries, returning true or false as appropriate.//
Array.prototype.myIncludes = function(arg1, arg2=0) {// not expecting a callback function
    for( let i = arg2; i < this.length; i++){ // start at given index
        if(this[i] === undefined) continue;
         if(this[i] === arg1) return true; 
    }
    return false;
};

// INDEXOF: returns the first index at which a given element can be found in the array, or -1 if it is not present.//
Array.prototype.myIndexOf = function(arg1, arg2=0) {
    for( let i = arg2; i < this.length; i++){
        if(this[i] === undefined) continue; 
        if(arg1 === this[i]) return i;
    }
    return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for ( let i = length; i < length + args.length;i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF:  returns the last index at which a given element can be found in the array, or -1 if it is not present//
Array.prototype.myLastIndexOf = function(arg1, arg2= this.length-1) { // Defaults to the array's length minus one (arr.length - 1)
    for( let i = arg2; i >= 0; i--){ // search backwards
        if(this[i] === undefined) continue; 
        if(arg1 === this[i]) return i;
    }
    return -1;  
};

// KEYS: returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.//
Object.grabKeys = function(obj1) {
    const newArr = [];
    for(let i in obj1){ // get key for each new value
        newArr.push(i);
    }
    return newArr;
};

// VALUES:  returns an array of a given object's own enumerable property values//
Object.grabValues = function(obj1) {
    const newArr = [];
    for(let i in obj1){ // get key for each new value
        newArr.push(obj1[i]);
    }
    return newArr;
};
