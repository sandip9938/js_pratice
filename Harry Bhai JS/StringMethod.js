// String Methods list 
// ------------------
// .trim() - removes whitespace from both ends of a string.
// .toLowerCase(), toUpperCase() - returns the lowercase or uppercase version of that string respectively, without modifying it.
// .toLowerCase(), toUpperCase() - converts the characters in a string into lowercase or uppercase letters, respectively.
// .toUpperCase() - returns the calling string value converted to upper case, according to any locale-specific case mappings.
// .toUpperCase(), toLowerCase() and slice(start, end) are useful for manipulating strings in various ways.
// .indexOf('string') returns the index number where 'string' is found within another string (or -1 if not present).
// .split(' ') splits the string into an array with each word as its own element (or use regex).
// .replace(/[aeiou]/g,'') will remove all vowels ('a', 'e' etc.) from your string.
// .concat(string2), which is used to join two or more strings together.
// .charAt(n), which returns one character at position n within a string.
// .charCodeAt(n), which returns the Unicode value of the character at index n.
// .indexOf(substring[, start]), which searches for a specified substring inside another string, starting at a specific point.


let name = "Hy i am a boy friend."
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log("My Name Is ".concat(name)); // concat method can be used here also
