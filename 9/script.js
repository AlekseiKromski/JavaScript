// Switch case

var carColor = 'red';

/*

if ( carColor === 'green' ){
    console.log('Зеленая');
} else if ( carColor === 'yellow' ){
    console.log('Желтая');
} else if ( carColor === 'red' ){
    console.log('Красная');
} else{
    console.log('Цвет машины не определен');
}
*/

// Упрощение 

switch (carColor){ //Все время проверяет одну переменную 
    case 'green':
        console.log('Зеленая');
        break
    case 'yellow':
        console.log('Желтая');
        break
    case 'red':
        console.log('Красная');
        break
    default: // аналог else
        console.log('Цвет машины не определен');
}
// break нужен для того, чтобы код в default не выполнился, если case условие было true 
