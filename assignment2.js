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

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

