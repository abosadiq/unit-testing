// reverseString("hello");
// const reverseString = str => {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr.toLowerCase();
// };

// Conditional Ternary Operator
function reverseString(str) {
  return str === ""
    ? ""
    : reverseString(str.toLowerCase().substr(1)) + str.toLowerCase().charAt(0);
}
module.exports = reverseString;
