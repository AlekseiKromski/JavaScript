// function getAge1(year){
//     return new Date().getFullYear() - year;
// }

// console.log(getAge1(1937));


// const getAge2 = (year) => {
//     return new Date().getFullYear() - year;
// }


// console.log(getAge2(1937));


// const getAge = year => {
//     console.log(year);
// }

// getAge(12)

// const getAge = year => new Date().getFullYear() - year;

// console.log(getAge(2012));

let a = 'Hello World!';

function first() {
  console.log('Inside first function');
  var ss = 'test'
  second();
  console.log('Again inside first function');
  function second() {
    console.log(ss);
  console.log('Inside second function');
}
}

first();
console.log('Inside Global Execution Context');

