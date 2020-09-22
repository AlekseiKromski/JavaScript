
function createCalcFunc(n){
    return function(){
        console.log(1000 * n);
    }
}

createCalcFunc(42)()