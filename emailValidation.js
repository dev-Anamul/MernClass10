/// reference valid and invalid email for following pattern

// ==> ==>-- valid email ==> ==>
// mysite@ourearth.com
// my.ownsite@ourearth.org
// mysite@you.me.net
// email@subdomain.example.com
// firstname+lastname@example.com
// email@123.123.123.123
// email@[123.123.123.123]
// 1234567890@example.com
// email@example-one.com
// firstname-lastname@example.com

/// ==> ==> ==> invalid email ==> ==>
// mysite.ourearth.com
// mysite@.com.my
// @you.me.net
// mysite123@gmail.b
// mysite@.org.org
// .mysite@mysite.org
// mysite()*@gmail.com
// mysite..1234@yahoo.com

const email = 'anamul-345-tgfg.56rt@gmail.com';

const patternEm = /^\w+(([.\-+]?\w+)*)?@\[?\w+([.-]?\w+)*(\.\w{2,3})+\]?/;

const resultEm = patternEm.test(email);
console.log(resultEm);
