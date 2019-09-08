var Number1 = 30
console.log(Number1.toString())
console.log((8/3).toFixed(1))
console.log(Number1.toString())
console.log(isNaN(NaN))
console.log(isNaN(45))

//Массивы

var cars = [
    'Ford',
    'Mazda',
    12,
    14
]
var any = [
    42,
    'apple',
    {a:1}
]

console.log(cars.length)
cars.push('Audi') //Добавляем элемент массива
console.log(cars.length)
console.log(cars)
cars.pop() //Добавляем элемент массива
console.log(cars)

console.log(cars.indexOf('Ford'))