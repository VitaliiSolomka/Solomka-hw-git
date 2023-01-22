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
let productPrice = 1901;

if (productPrice >= 1000 && productPrice <= 1900 ) {
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

let productPrice1 = 1900;

if (!(productPrice1 >= 1000 && productPrice1 <= 1900)) {
    console.log ("Ціна товару знаходить за межами 1000 і 1900 включно. Ціна за товар: " + productPrice1)
} else (
    console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice1)
);

(productPrice1 >= 1000 && productPrice1 <= 1900) ? console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice1) : console.log ("Ціна товару знаходить за межами 1000 і 1900 включно. Ціна за товар: " + productPrice1);

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
let wordNoVowels = word.replace(/[a,e,y,u,i,o,A,E,Y,U,I,O]/g,'');
console.log(wordNoVowels)

// Сделал так, но мне совсем не нравиться)

/*
9.  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

let meters = 126000;
let tranferToKilometers = (meters / 1000);
let lastNumber = tranferToKilometers.toString().split('').pop();
let twoLastNumber = tranferToKilometers.toString().slice(-2);
if (Number.isInteger(tranferToKilometers)) {
    if (twoLastNumber == (11 || 12 || 13 || 14)) {
        console.log("Виходить: " + tranferToKilometers + " кілометрів");
    }
    else {
        if (lastNumber == 1){
            console.log("Виходить: " + tranferToKilometers + " кілометр");
        }
        else if (lastNumber == (2 || 3 || 4)) {
            console.log("Виходить: " + tranferToKilometers + " кілометра");
        }
        else {
            console.log("Виходить: " + tranferToKilometers + " кілометрів");
        }
    }
   
}
else {
    console.log("Виходить: " + tranferToKilometers + " кілометра")
}


// let metersParseNum = parseInt(meters.match(/\d+/))
// let metersParseWord = meters.split(' ').pop();
// let tranferToKilometers = (metersParseNum / 1000)
// let lastNumber = tranferToKilometers.toString().split('').pop();
// let titleOfKilometers = null;

// if (metersParseWord == 'метр' || metersParseWord == 'метри' || metersParseWord == 'метрів') {
//     if (lastNumber == 1){
//         titleOfKilometers = 'кілометр';
//     }
//     else if (lastNumber == (2 || 3 || 4)) {
//         titleOfKilometers = 'кілометри';
//     }
//     else {
//         titleOfKilometers = 'кілометрів'
//     }
// }
// console.log(metersParseNum + " " + metersParseWord + " це " + tranferToKilometers + " " + titleOfKilometers)