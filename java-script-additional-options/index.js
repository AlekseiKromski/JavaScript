var str = '1,2,3,4,5,6,7,8,9';

var array = str.split(',')
//console.log(array.reverse());

array.splice(0, 1, 'test', '234234')
var newArray = array.concat()
// console.log(newArray);
var objArray = [
    {name: 'Max', age: 12},
    {name: 'Jelena', age: 18},
    {name: 'Mark', age: 11},
]

var sortArray = [1,2,3,4,5].filter(function(i){
    return i % 2 !== 0;
})

var mapArray = array.map(function(element){
    return parseInt(element); 
})
console.log(mapArray);