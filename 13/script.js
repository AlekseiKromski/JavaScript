// массивы
var cars = [
    'Ford',
    'Mazda',
    'Kia',
    'BMW'
];
console.log(cars);
console.log(cars[1]); // Mazda

/**
 * Методы массивов
 * length - подсчет количества элементов в массиве
 * cars.push('То, что хотим добавить');
 * cars.pop(); - удаляет послежний элемент
 * cars.shift() - удаление первого элемента
 * cars.unshift() - смещение элемента вперед
 * cars.indexOf('Kia') - поиск значения в массиве
 * 
 */

console.log(cars.length);
cars.push('Audi');
console.log(cars);

var audi = cars.pop();
console.log(cars, audi);

var ford = cars.shift();
console.log(cars, ford);

cars.unshift(audi);
console.log(cars);

console.log(cars.indexOf('kia'));

