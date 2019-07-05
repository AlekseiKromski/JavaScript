// объекты

var person = {
    name: 'Vasili',
    year: 1990,
    family: ['Elena','Igor'],
    car: {
        year: 2010,
        model: 'Ford'
    },
    calculateAge: function(){
        this.age = 2018 - this.year //нужно для обращения к данным данного объекта
        console.log(age);
    }
}

console.log(person);
console.log(person.name);
console.log(person['year']);
var fild = 'car';
console.log(person[fild].year);
person.calculateAge();
console.log(person);