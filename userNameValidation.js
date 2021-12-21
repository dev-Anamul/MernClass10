/// // ==> userName validation between 6 to 20 character

/// // condition for username ==> please read the crieteria befor check code

// =>1. Username doesn't contains any special character.
// =>2. can't start with any number or special charcter.
// =>3. UserName contains any small letter , capital letter, number and underscore
// =>4 UserName must contains at least 6 characters and up to 20 character

const userName = 'Anamul_haque';

const patternUser = /^[A-Za-z]\w{5,19}$/;

const resultUser = patternUser.test(userName);
console.log(resultUser);
