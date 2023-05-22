let was = 4290; // предыдущее значение счётчика
let became = 4577; // нынешнее значение счётчика

let kilowattUsed = became - was; // количество использованных киловатт
let payment = kilowattUsed * 1.7; // сумма к оплате

let result = payment; //вывод суммы

alert ('Сумма к оплате' + payment)