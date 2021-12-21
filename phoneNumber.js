// phone number validation

// ==> ==> example phone number === === ===
// const phoneNumber = '+8801791689523';
// const phoneNumber = '8801791689523';
// const phoneNumber = '01791689523';
// const phoneNumber = '+8801791-689523';
// const phoneNumber = '8801791-689523';
const phoneNumber = '01791-689524';

const patternPhn = /^((\+88|88)?01)\d{3}-?\d{6}$/;

const resultPhn = patternPhn.test(phoneNumber);
console.log(resultPhn);
