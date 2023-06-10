// Write a function called "getProperty". Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:
//
// If there is no property at the given key, it should return undefined.
function getProperty(obj, key) {
    return obj[key];
}

const obj = {
    key: 'value'
};
const output = getProperty(obj, 'key');
console.log(output); // --> 'value'

//-------------------------------------------------------------------------

// Write a function called "addProperty". Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.
function addProperty(obj, key){
    var obj = true;
    return obj;
}

const myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true