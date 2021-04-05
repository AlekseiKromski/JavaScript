var person = {
    name: 'max',
    age: 22,
    job: 'front-end'
}


console.log(Object.keys(person));
Object.keys(person).forEach(element => {
    console.log(person[element]);
})