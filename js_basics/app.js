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
//
// function multiplyNumeric(menu){
//     for (let m in menu){
//         if (typeof menu[m] == 'number'){
//             console.log('ok')
//             menu[m] *= 2;
//         }
//     }
// }
//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
//
// multiplyNumeric(menu);
//
// console.log(menu)
//
// let user = {
//     name: "Test"
// }
//
// let id = Symbol("id");
//
// user[id] = 1;
// console.log(user)

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };
// ladder.up().up().down().showStep()
// console.log(ladder)

// --- NAME: Числа, как приметивы ---
//
// let x = 11;
// //Передаваемое значение, это система исчисления
// console.log(x.toString(10))
//
//
// x = 3.6
// //Округление в меньшую сторону
// console.log(Math.floor(x))
//
//
// //Округление в большую сторону
// console.log(Math.ceil(x))
//
// //Округление до ближайшего целого
// console.log(Math.round(x))
//
// x = "3%"
// // Ищет только цифры
// console.log(parseInt(x))
//
// console.log(Math.max(3, 5, -10, 0, 1))
// console.log(Math.min(3, 5, -10, 0, 1))
//
// //Возведение в степень
// console.log(2 ** 3)
// console.log(Math.pow(2, 3));
//
// //Отображение определенного количества символов после запятой
// console.log(2.34.toFixed(1));

// --- NAME: Строки, как приметивы ---
// let str = 'Widget with id';
// console.log(str[str.indexOf('id', 2)])
//
// let str = 'Ослик Иа-Иа посмотрел на виадук';
//
// let target = 'а'; // цель поиска
//
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//
//     console.log( `Найдено тут: ${foundPos}` );
//     pos = foundPos + 1; // продолжаем со следующей позиции
// }

// //Данная проверка возращает true, если найдена подстрока
// console.log("test".includes("q"));
//
// //Проверка на то, начинается ли строка с подстроки, которую мы передали
// console.log("test".startsWith("te"));
//
// //Проверка на то, начинается ли строка с подстроки, которую мы передали
// console.log("test".endsWith("tt"));
//
// let str = "stringify";
//
// //Не велючает последний символ
// console.log(str.slice(0,5)) //strin
//
// // Можно испольховать start больше, чем end
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"

// function ucFirst(str){
//
//         return str[0].toUpperCase() + str.slice(1);
// };
//
// console.log(ucFirst("вася"));

// function checkSpam(str){
//     str = str.toLowerCase();
//     if(str.includes("fff") || str.includes("yyy")){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(checkSpam('buy fff now'))
// console.log(checkSpam('yyy'))
// console.log(checkSpam('test'))

// function truncate(str, max){
//     if(str.length >= max){
//         return str.slice(0,max) + "...";
//     }
//     return str;
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(currency){
    return +currency.slice(1);
};

console.log(extractCurrencyValue('$120'));