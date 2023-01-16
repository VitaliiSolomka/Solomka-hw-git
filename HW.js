/* 1. Ви прийшли в Макдональдз з трьома друзями.
Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
то виводити в консоль текст "Ми йдемо в інше кафе"
(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let burger = 4;
let potatoFree = 1;

if (burger > 3 && potatoFree > 0) {
    console.log ("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
}

/* 2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/
let productPrice = 1901

if (productPrice > 1000 && productPrice <= 1900 ) {
    console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice)
} else if (productPrice > 1900) {
    console.log("Ціна більше за 1900. Ціна за товар: " + productPrice)
} else (
    console.log("Ціна меньша за 1001. Ціна за товар: " + productPrice)
)

/* 3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

let productPrice1 = 100;
let productStatus1 = (productPrice1 > 1000 && productPrice1 < 1900)

if (!productStatus1) {
    console.log ("Ціна товару знаходить за межами 1000 і 1900 включно. Ціна за товар: " + productPrice1)
} else (
    console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice1)
);

(productPrice1 > 1000 && productPrice1 < 1900) ? console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice1) : console.log ("Ціна товару знаходить за межами 1000 і 1900 включно. Ціна за товар: " + productPrice1);

/* 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let season = 3;

if  (season == 1) {
    console.log ("Winter")
} else if (season == 2) {
    console.log ("Spring")
} else if (season == 3) {
    console.log ("Summer")
} else if (season == 4) {
    console.log ("Autumn")
} else (
    console.log ("Введіть значення від 1 до 4!")
)

/* 5. Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/
    
let a = 50;
let b = 60;
let c = 55;

if ((c > b && a > c || c > a && b > c) && a != b && a != c && b != c) {
    console.log ("Середнє число між a, b, c є число c: " + c) 
} else if (b > c && b < a || b > a && b < c) {
    console.log ("Середнє число між a, b, c є число b: " + b)
} else if (a > c && a < b || a > b && a < c ){
    console.log ("Середнє число між a, b, c є число a: " + a) 
} else (
    console.log ("Числа a, b, c не повинні бути рівними між собою!")
)

/* 6. Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Понеділок")
        break;
    case 2:
        console.log("Вівторок")
        break;
    case 3:
        console.log("Середа")
        break;
    case 4:
        console.log("Четвер")
        break;
    case 5:
        console.log("Пятниця")
        break;
    case 6:
        console.log("Субота")
        break;
    case 7:
        console.log("Неділя")
        break;
    default:
        console.log("Введіть число від 1 до 7")
        break;
}

/* 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

let operator = '*';

let numberA = 10;
let numberB = 20;
let numberSum = 0;

switch (operator){
    case '+':
        numberSum = numberA + numberB
        console.log('Виконана математична операція "+": ' + numberSum)
        break;
    case '-':
        numberSum = numberA - numberB
        console.log('Виконана математична операція "-": ' + numberSum)
        break;
    case '*':
        numberSum = numberA * numberB
        console.log('Виконана математична операція "*": ' + numberSum)
        break;
    case '/':
        numberSum = numberA / numberB
        console.log('Виконана математична операція "/": ' + numberSum)
        break;
    default:
        console.log('Введіть знак математичної операції: "+", "-", "*", "/"')
        break;
}

/* 8.  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let word = 'SomesAEadwiiiiqetuAEYUIOaayoaaayuieee';
let letterA = word.replace(/a/g,'');
let letterE = letterA.replace(/e/g,'')
let letterY = letterE.replace(/y/g,'')
let letterU = letterY.replace(/u/g,'')
let letterI = letterU.replace(/i/g,'')
let letterO = letterI.replace(/o/g,'')
let letterAa = letterO.replace(/A/g,'');
let letterEe = letterAa.replace(/E/g,'')
let letterYy = letterEe.replace(/Y/g,'')
let letterUu = letterYy.replace(/U/g,'')
let letterIi = letterUu.replace(/I/g,'')
let letterOo = letterIi.replace(/O/g,'')
console.log(letterOo)

// Сделал так, но мне совсем не нравиться)