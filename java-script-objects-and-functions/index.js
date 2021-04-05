//Function (Class) constructor
function Car(name, year){
    this.name = name;
    this.year = year;
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
};
Car.prototype.color = 'black';

var ford = new Car('ford', 2002);
var bmw = new Car('BMW', 1990);
console.log(ford);
console.log(bmw);
