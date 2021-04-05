var a = [1,2,3];
var b = [5,'Hello',6];

Array.prototype.double = function (){
    return this.map(function(item){
        if(typeof item === 'number'){
            return item * item
        }else if(typeof item === 'string'){
            return item + item
        }
    })
}

var newA = a.double();
var newB = b.double();

console.log(newA);
console.log(newB);