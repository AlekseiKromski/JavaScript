var ford = Object.create({
    calculateDistancePerYear: function(){
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.floor(this.distance / this.age),
            enumerable: true,
            writable: false,
            configurable: false,    
        });
    }
}, {
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false,
    },
    model:{
        value: 'focus',
        enumerable: true,
        writable: false,
        configurable: false,
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false,
    },
    distance: {
        value: 20000,
        enumerable: true,
        writable: true,
        configurable: false,
    },
    age: {
        set: function(age){
            console.log('Setup value of age');
        },
        get: function(){
            return new Date().getFullYear() - this.year
        }
    }
})

for(var key in ford){
    if(ford.hasOwnProperty(key)){
        console.log(key);

    }
}

