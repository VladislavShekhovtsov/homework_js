//----------------------------Возраст------------------------------------------------------//

let age = prompt("Пожалуйста, введите ваш возраст:");                                   // Запрашиваем возраст пользователя
let year = new Date().getFullYear();                                                    // Получаем текущий год
let birthYear = currentYear - age;                                                      // Вычисляем год рождения

alert("Ваш год рождения: " + birthYear);                                                // Выводим год рождения через alert

//--------------------------Градусы---------------------------------------------------------//

let t_grad_cel = prompt("Введите температуру в градусах Цельсия");

t_far = t_grad * 1.8 + 32;
alert(t_far);

//--------------------------Деление нацело---------------------------------------------------------//

let num1 = prompt("Введите первое число:");                                 // Запросить у пользователя два числа
let num2 = prompt("Введите второе число:");
let result = Math.floor(num1 / num2);                                                   // Выполнить деление

alert("Результат деления: " + result);                                                  // Вывести результат

//--------------------------Обмен валют---------------------------------------------------------//

let summa = prompt("Введите сумму:");                                       // Значение валюты

const rate = 37.5;                                                                      // Курс

let resultate = summa * rate;                                                           // Обчисление
resultate = resultate.toFixed(2);                                                       // Ограничение знаков после запятой

alert("Результат обмена: " + resultate);                                                // Вивести результат

//--------------------------Цвет------------------------------------------------------------------//

let red = prompt("Введите значение для red (от 0 до 255):");
let green = prompt("Введите значение для green (от 0 до 255):");              // Запросить ввести значения для red, green и blue
let blue = prompt("Введите значение для blue (от 0 до 255):");

let hexRed = red.toString(16);
let hexGreen = green.toString(16);                                                      // Преобразуем значения в шестнадцатеричную систему счисления
let hexBlue = blue.toString(16);

let cssColor = "#" + hexRed + hexGreen + hexBlue;                                       // Собираем значение в формат #RRGGBB

alert("CSS-цвет: " + cssColor);                                                         // Результат

//----------------------------------Калькулятор квартир-------------------------------------------//

let totalFloors = prompt("Введите количество этажей в доме:");                // Вводим кл-во этажей и квартир на этаже
let flatsPerFloor = prompt("Введите количество квартир на этаже:");

let flatNumber = prompt("Введите номер квартиры:");                           // Получение номера квартиры от пользователя

let flatsPerEntrance = flatsPerFloor * 9;       //36
let entrance = Math.ceil(flatNumber / flatsPerEntrance);     //9                        // Расчет подъезда и этажа
let floorInEntrance = Math.ceil((flatNumber % flatsPerEntrance) / flatsPerFloor);       // Деление остатка

alert("Подъезд:" + entrance);                                                           // Вывод результата
alert("Этаж:" + floorInEntrance);