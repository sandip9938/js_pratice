// String 
// String types 
// classification of string prototypes 
// String prototype methods
// String.prototype.length property and length method
// String.fromCharCode() function
// String.fromCodePoint() function
// String.raw() template literal tag
// String.prototype.charAt(), charCodeAt, codePointAt properties/methods
// String.prototype.concat(string) method
// String.prototype.endsWith(searchString [, endPosition]) method
// String.prototype.includes(searchString [, position ]) method
// String.prototype.indexOf(searchValue[, fromIndex]) method
// String.prototype.lastIndexOf ( searchValue [ , fromIndex ] ) method
// String.prototype.localeCompare(compareString) method
// String.prototype.match([regexp|substr] [, flags]) method
// String.prototype.normalize ([ form ]) method
// String.prototype.padEnd(targetLength [, padString]) method
// String.prototype.padStart(targetLength [, padString]) method
// String.prototype.repeat(count) method
// String.prototype.replace(searchValue | regexp, replaceValue) method
// String.prototype.slice(start,end) method
// String.prototype.split([separator], limit) method
// String.prototype.startsWith(searchString [, position ]) method
// String.prototype.substring(indexA, indexB) method
// String.prototype.toLocaleLowerCase () method
// String.prototype.toLocaleUpperCase () method
// String.prototype.toLowerCase () method
// String.prototype.toString() method
// String.prototype.toUpperCase() method
// String.prototype.trim() method
// String.prototype.valueOf() method


const name="sandip"
console.log(typeof (name)) // string
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.length);
console.log(name[2]);
console.log(name._proto_);
console.log(name.indexOf('a'));
console.log(name.charAt(3));

const a='2'+2*2
console.log(a);