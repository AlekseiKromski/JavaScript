//циклы

var num = [1,2,3,4,5];

num.push('Not a number');

for( var i = 0; i < num.length; i++ ){ 
    
    if(num[i] % 2 !== 0){ 
        continue
    }
    console.log(num[i]);
}

//console.log();