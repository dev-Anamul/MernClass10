/// // password validation

/// ==> ==> ==> Criteria for this patter <== <== <==
// 1. password contains at least 8 characters and maximun 20 character
// 2. Password my be contains any word character, number , special character

/// / Sample Password for the following pattern
// const password = '1237659775656';
// const password = 'Anamul#$$jibon';
const password = 'Anamul123#$$234jibon';
// const password = '!1*2#3@@@4%%%%!';
// const password = 'THISIS123@#';

const patternPass = /^(\w|[!@#$%^&*-]){8,20}$/;

const resultPass = patternPass.test(password);
console.log(resultPass);
