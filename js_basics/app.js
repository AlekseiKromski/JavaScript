/*

02.09.2020

//Приоброзование типов данных

let value = "true";

value = Boolean(value);

console.log(typeof(value))

//Приобразование строки в число унарным оператором

let str1 = "2";

console.log(typeof +str1);

//пре/пост фиксная запись
let c = 0
alert(++c)
*/

// --- NAME: alert, prompt, confirm ---

// alert('Hello')

// let result = prompt("How old are you?",100)
// console.log(result)

// let result = confirm('WHO MAIN&')
// console.log(result)

// --- NAME: Усоловный оператор if ---
// + это унарный оператор, который переводит строку в число
//let year = +prompt('How old are you?', 18);

//if(year === 18) alert('Тебе есть уже 18')

// let result = year >= 18 ? true : false;
// alert(result)

// let result = year >= 18
// alert(result)

/*
let result = year < 3 ? 'Привет, малышь' :
    year <= 18 ? 'Привет!' :

alert(result)
*/

// let result;
//
// let a =1 , b = 2;
//
// result = (a + b < 4) ? 'Мало' : 'Много'
//
// console.log(result)

// let message = 'student', login
// login = (message = 'teacher') ? 'teacher' :
//     (message = 'student') ? 'student' : 'none'
// console.log(login)

// --- NAME: циклы while и for ---
// outer: for (let i = 0; i < 3; i++) {
//
//     for (let j = 0; j < 3; j++) {
//
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//
//         // если пустая строка или Отмена, то выйти из обоих циклов
//         if (!input) break outer; // (*)
//         console.log(i, j)
//         // сделать что-нибудь со значениями...
//     }
// }

// --- NAME: функции ---

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// function showOk() {
//     alert( "Вы согласны." );
// }
//
// function showCancel() {
//     alert( "Вы отменили выполнение." );
// }
//
// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);

// --- NAME: Объекты ---

//Вычесляемые свойства
// let fruit = prompt("Какой фрукт купить?", "apple");
//
// let bag = {
//     [fruit]: 5
// }
//
// alert(bag.apple)
//
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };
//
// for(let u in user){
//     alert(user[u]);
// }
//
// let user = { name: "John" };
//
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
//
// Object.assign(user, permissions1, permissions2)
// console.log(user)

// let user = {
//     name: "John",
//     age: 30
// };
//
// let clone = Object.assign({}, user);
// console.log(clone)
//
// function isEmpty(schedule){
//     for(let s in schedule){
//         return false;
//     }
//     return true;
// }
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// let count = 0;
// for(let s in salaries){
//     count += salaries[s];
// }
// console.log(count)

function multiplyNumeric(menu){
    for (let m in menu){
        if (typeof menu[m] == 'number'){
            console.log('ok')
            menu[m] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


multiplyNumeric(menu);

console.log(menu)
