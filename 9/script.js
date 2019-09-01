var carName = 'Ford'
var carYear = 2008
var personYear = 1990

function calculateAge(year){
    var currentYear = 2019
    if ((currentYear - year) < 10){
        console.log('Возраст меньше 10 лет')
    } else{
        console.log('Возраст больше 10 лет')
        
    }
}

calculateAge(carYear)
