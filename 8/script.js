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