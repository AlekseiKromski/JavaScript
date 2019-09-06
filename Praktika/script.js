var i = 184
var m = 54
var t = 17
var gender = 'm'
var result_ID
var resultK_ID

if(gender == 'm'){
	result_ID = (3 * i - 450 + t) * 0.255 + 40.5
} else {
	result_ID = (3 * i - 450 + t) * 0.250 + 40.0
}

//Вычесление индекса массы тела

resultK_ID = m / ((i/100) ** 2)

console.log('Вывод идеальной массы тела - ' + result_ID)
console.log('Вывод индекса массы тела - ' + resultK_ID)

if ( gender = 'm'){
	if (resultK_ID < 20){
		console.log('Недостаточный вес')
	} else if (resultK_ID > 20 && resultK_ID < 20){
		console.log('Нормальный вес')
	} else if (resultK_ID > 25 && resultK_ID < 30){
		console.log('Небольшой избыток')
	} else if (resultK_ID > 30 && resultK_ID < 40){
		console.log('Лишний вес')
	}
} else {
	if (resultK_ID < 19){
		console.log('Недостаточный вес')
	} else if (resultK_ID > 19 && resultK_ID < 24){
		console.log('Нормальный вес')
	} else if (resultK_ID > 24 && resultK_ID < 30){
		console.log('Небольшой избыток')
	} else if (resultK_ID > 30 && resultK_ID < 40){
		console.log('Лишний вес')
	}
}
alert('Привект')