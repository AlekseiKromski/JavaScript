var carColor = 'green'

if (carColor === 'red'){
    console.log('Car color is red')
} else if (carColor === 'yellow'){
    console.log('Car color is yellow')
} else if (carColor === 'green'){
    console.log('Car color is green')
} else{
    console.log('Цвет машины не определен')    
}

switch (carColor){
    case 'green':
        console.log('Car color is green')
        break
    case 'yellow':
        console.log('Car color is yellow')
        break
    case 'red':
        console.log('Car color is red')
        break
    default:
        console.log('Цвет машины не определен')    
}

var CarName = 'Sidan'
var CarAge = 2019
var NowDate = 2019

var CarYear = NowDate - CarAge

console.log("Машине - ", CarYear)

switch(true){
    case (CarYear < 5):
        console.log("Ваша машина меньше 5 лет")
        break
    case (CarYear > 10):
        console.log("Ваша машина больше 10 лет")
        break
    default:
        console.log("Сбой проверки")
}