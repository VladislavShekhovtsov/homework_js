{   //  Чётное и нечётное
    let userNum = prompt("Введите число:");

    if (userNum % 2 === 0) {
        alert("Чётное число");
    }
    else {
        alert("Нечётное число");
    }


}

{  // Некоректное слово

    let userInput = prompt("Введите текст:");

    if (userInput.indexOf("собака", "кошка", "мышка") === 0) {
        alert("Текст содержит некорректные слова.");
    }
    else {
        alert("Текст не содержит некорректных слов.");
    }

}

{ // Вопросы дополненые условиями

    let question1 = confirm("Вы любите пиво?");
    let question2 = confirm("Вы пьёте его часто?");

    if (question1) {
        console.log("Ответ на первый вопрос: Да");
    } else {
        console.log("Ответ на первый вопрос: Нет");
    }

    if (question2) {
        console.log("Ответ на второй вопрос: Да");
    } else {
        console.log("Ответ на второй вопрос: Нет");
    }

    if (question1 && question2) {
        alert("Вы любите пиво и пьёте его часто.");
    } else if (question1 && !question2) {
        alert("Вы любите пиво, но не пьёте его часто.");
    } else if (!question1 && question2) {
        alert("Вы не любите пиво, но пьёте его часто.");
    } else {
        alert("Вы не любите пиво и не пьёте его.");
    }

}

{   //  Размеры

    let size = prompt("Введите размер в исходной системе:");

    let convertedSize = size - 30;

    if (size >= 40 && size <= 60) {
        alert(`Размер ${size} в европейской системе это ${convertedSize} в американской системе.`);
    } else {
        alert("Конвертация размера невозможна.");
    }

}

{   //Пол
    let isMale = confirm("Вы мужчина?");

    let gender = isMale ? "мужчина" : "женщина";
    alert("Вы: " + gender);

}

{   //  Prompt: or
    let age = prompt("Введите ваш возраст:");

    if (!age < 1, age > 100 || age.trim() === "") {
        alert("Ошибка");
    } else {
        alert("Ваш возраст: " + age);
    }
}

{   //  Confirm: or this days
    let shoping = confirm("Шопинг?");

    if (!shoping || shoping === 0) {
        alert("Ты бяка");
    } else {
        alert("Погнали");
    }

}

{   //  Default: or
    const defaultFirstName = "Иван";
    const defaultLastName = "Иванов";
    const defaultMiddleName = "Иванович";

    let firstName = prompt("Введите ваше имя:") || defaultFirstName;
    let lastName = prompt("Введите вашу фамилию:") || defaultLastName;
    let middleName = prompt("Введите ваше отчество:") || defaultMiddleName;

    alert(`Привет, ${firstName} ${lastName} ${middleName}!`);

}

{   //  Default: if
    const defaultFirstName = "Иван";
    const defaultLastName = "Иванов";
    const defaultMiddleName = "Иванович";

    let firstName = prompt("Введите ваше имя:");
    if (!firstName) {
        firstName = defaultFirstName;
    }

    let lastName = prompt("Введите вашу фамилию:");
    if (!lastName) {
        lastName = defaultLastName;
    }

    let middleName = prompt("Введите ваше отчество:");
    if (!middleName) {
        middleName = defaultMiddleName;
    }

    alert(`Привет, ${firstName} ${lastName} ${middleName}!`);

}

{   //  Login and password
    let correctUsername = "admin";
    let correctPassword = "qwerty";

    let username = prompt("Введите логин:");

    if (username === correctUsername) {
        let password = prompt("Введите пароль:");

        if (password === correctPassword) {
            alert("Добро пожаловать!");
        } else {
            alert("Ошибка: неправильный пароль.");
        }
    }
    else {
        alert("Ошибка: неправильный логин.");
    }
}

{   //  Currency exchange
    let currency = prompt("Введите валюту (например, USD, EUR):").toUpperCase();
    let buyOrSell = confirm("Вы хотите купить данную валюту? Если нет, то будет выполнена продажа.");

    let rate;

    if (currency === "USD") {
        rate = buyOrSell ? 1 / 70 : 70;
    } else if (currency === "EUR") {
        rate = buyOrSell ? 1 / 80 : 80;
    } else {
        rate = 1; 
    }

    let amount = parseFloat(prompt("Введите сумму для обмена:"));
    let result = buyOrSell ? amount / rate : amount * rate;

    console.log("Результат операции:", result);

}


{   //  Scissors
    let userChoice = prompt("Выберите: камень, ножницы или бумагу?").toLowerCase();
    let computerChoice;
    
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
      computerChoice = "камень";
    } else if (randomNum === 1) {
      computerChoice = "ножницы";
    } else {
      computerChoice = "бумага";
    }
    
    alert("Компьютер выбрал: " + computerChoice);
    
    let result =
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
        ? "Вы победили!"
        : userChoice === computerChoice
        ? "Ничья!"
        : "Компьютер победил!";
    
    alert(result);

}