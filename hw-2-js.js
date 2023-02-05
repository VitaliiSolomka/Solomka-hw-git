/* 1. Ви прийшли в Макдональдз з трьома друзями.
Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
то виводити в консоль текст "Ми йдемо в інше кафе"
(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

function eatOrNot(burger, potatoFree) {
    if (burger > 3 && potatoFree > 0) {
        console.log ("Ми поїли")
    } else {
        console.log("Ми йдемо в інше кафе")
    }
}

eatOrNot(4, 1)

/* 2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/
function priceOfProduct(productPrice) {
    if (productPrice >= 1000 && productPrice <= 1900 ) {
        console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice)
    } else if (productPrice > 1900) {
        console.log("Ціна більше за 1900. Ціна за товар: " + productPrice)
    } else (
        console.log("Ціна меньша за 1001. Ціна за товар: " + productPrice)
    )
}

priceOfProduct (1901)

/* 3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

function priceOfProduct1(productPrice1) {
    if (!(productPrice1 >= 1000 && productPrice1 <= 1900)) {
        console.log ("Ціна товару знаходить за межами 1000 і 1900 включно. Ціна за товар: " + productPrice1)
    } else (
        console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice1)
    );
}

priceOfProduct1(1899)

function priceOfProduct2(productPrice1) {
    (productPrice1 >= 1000 && productPrice1 <= 1900) ? console.log("Ціна товару знаходить в межах між 1000 і 1900 включно. Ціна за товар: " + productPrice1) : console.log ("Ціна товару знаходить за межами 1000 і 1900 включно. Ціна за товар: " + productPrice1);
}

priceOfProduct2(1902)

/* 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let season = null;

function seasonNumber(season) {
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
}

seasonNumber(2)

/* 5. Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/
    
function middleNumber(a, b, c) {
    if ((c > b && a > c || c > a && b > c) && a != b && a != c && b != c) {
        console.log ("Середнє число між a, b, c є число c: " + c) 
    } else if (b > c && b < a || b > a && b < c) {
        console.log ("Середнє число між a, b, c є число b: " + b)
    } else if (a > c && a < b || a > b && a < c ){
        console.log ("Середнє число між a, b, c є число a: " + a) 
    } else (
        console.log ("Числа a, b, c не повинні бути рівними між собою!")
    )
}

middleNumber(21,15,14)

/* 6. Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

function dayNumber1(dayNumber) {
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
}

dayNumber1(2)


/* 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

function mathOperation(operator,numberA,numberB) {
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
}

mathOperation ('/',14,16)


/* 8.  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let word = null;
function removeVowels(word) {
    let wordNoVowels = word.replace(/[a,e,y,u,i,o,A,E,Y,U,I,O]/g,'');
    console.log(wordNoVowels)
}

removeVowels('AEYUIOQaeyuio')

// Сделал так, но мне совсем не нравиться)

/*
9.  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

function tranferMeters(meters) {
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
}

tranferMeters (134100)