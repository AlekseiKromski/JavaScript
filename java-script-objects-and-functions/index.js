function printObject(objName) {
    console.log(objName);
    for(var key in this){
        if(this.hasOwnProperty(key)){
            console.log(`[${key}]`, this[key]);
        }
    }
}   

var person = {
    firstName: 'max',
    job: 'js',
    age: 29,
    friends: [
        'Elena', 'Igor'
    ]
}

var car = {
    name: 'ford',
    year: 2012,
    model: 'focus'
}

printObject.call(car, 'car')
console.log('++++++++++++++++');
printObject.apply(person, ['person'])