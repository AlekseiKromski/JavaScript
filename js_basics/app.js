let user = {
    name: 'John',
    age: 30
};
count(user);
function count(obj){
    let sum = 0;
    for(obj of Object.keys(obj)){
        sum++;
    }
    console.log(sum);
}