// функции 

function YearCount(year){
    var currentYear = 2019;
    var result = currentYear - year;
    return result; 
}
function checkAndLogAge(year){
    if (YearCount(year) < 10){
        var massag = console.log('Возраст меньше 10 лет');   
    }else{
        var massag = console.log('Возраст больше 10 лет');   
    }
}
var carName = 'Ford';
var carYear = 2010;
var personYear = 1990;


checkAndLogAge(carYear);
checkAndLogAge(personYear);