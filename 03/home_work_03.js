{ // Приветствие
    let userName = prompt("Введите ваше имя:");

        alert("Привет, " + userName + "! Добро пожаловать!");

}


{ // Блин
    let userStr = prompt("Введите строку:");

    let newString = userStr.split(",").join(", блин");

    alert(newString);
}


{   // Регистр

    let str = "cANBerRa";

    let result  = str.slice() [0].toUpperCase() + str.slice(1).toLowerCase();

    console.log(result);
}

{   // Кол-во слов в строке
    let str = prompt("Введите строку:");

    let division = str.split(" ");

    let numberWords = division.length;

    alert(numberWords);

}   

{   //  ФИО
    let surnameName = prompt("Введите фамилию:");

    let name = prompt("Введите имя:");

    let middleName = prompt("Введите отчество:");

    surnameName = surnameName.trim();
    name = name.trim();
    middleName = middleName.trim();

    surnameName = surnameName.slice() [0].toUpperCase() + surnameName.slice(1).toLowerCase();
    name = name.slice() [0].toUpperCase() + name.slice(1).toLowerCase();
    middleName = middleName.slice() [0].toUpperCase() + middleName.slice(1).toLowerCase();

    let fullName = surnameName + " " + name + " " + middleName;

    alert(fullName);
      
}

{   //  Замена слова
    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let result = str.split("пиво").join("чай");

alert(result) 

}

{

    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let result = str.indexOf("<br />") + str.slice(33, 39);

console.log(result) 
}
