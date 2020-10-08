let person = Object.create({}, {
    name: {
        value: "Vladilen",
        enumerable: true,
    },
    birthYear: {
        value: 1993,
        enumerable: true,
    }
});

for(let key in person){
    console.log(key);
}