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