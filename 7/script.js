var carName = 'Ford'
var carYear = 2014
var carAge = 2018 - carYear

if ( carAge < 5 ){
    console.log(carName + ' младше 5 лет')
} else if ( carAge >= 5 && carAge <= 10 ) {
    console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else{
    console.log('Возраст ' + carName + ' равняется ' + carAge)
}

//0,null,undef,'' = false
//1,'hh' = true

var empty = ''
var h = 'hellow'
if (h){
    console.log('True')
}else{
    console.log('False')
}