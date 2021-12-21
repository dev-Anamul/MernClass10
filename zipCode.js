// according ot google Bangladeshi zip code or post code contains 4 digit
// The following patternZip can validate minimun 4 digit's and maximun 6 digit's zip code

// const zipCode = '2345';
// const zipCode = '23451';
const zipCode = '234456';

const patternZip = /^\d{4,6}$/;

const resultZip = patternZip.test(zipCode);

console.log(resultZip);
