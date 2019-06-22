var carName = 'Ford';
var carYear = 2008;
var carAge = 2008 - carYear;

// Конструкция условия 

if ( carAge < 5 ) {
    console.log(carName + ' младше 5 лет');
} else if ( carAge >= 5 && carAge <= 10 ) {
    console.log(carName + ' больше или равен 5 годам или менешье или равен 10');
}else{
    console.log( ' Возраст ' + carName + ' равняеться ' + carAge);    
}

//Занчение 0 = false
//Занчение 1 = true
//'пустая строка' = false
//NaN (NotANumber)= false
//str = true ( Если строка не пустая, то проверка выдаст true ) 

var empty = '';
var str = 'hellow';

if (str) {
    console.log('True')
} else {
    console.log('False')
}