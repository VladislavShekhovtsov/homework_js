{   // Confirms
    let answers = [];

    answers.push(confirm("Вы любите пиццу?"));
    answers.push(confirm("Вы любите кофе?"));
    answers.push(confirm("Вы пьёте пиво?"));

    alert(answers);

}

{   //  Prompts
    let questions = [
        "Вы любите пиццу?",
        "Вы любите кофе?",
        "Вы пьёте пиво?"
    ];
    let answers = [];
    answers[0] = prompt(questions[0]);
    answers[1] = prompt(questions[1]);
    answers[2] = prompt(questions[2]);

    alert(answers);

}

{   //  Item access
    let index = prompt("Введите индекс от 0 до 2");
    let meaning = ["BMV", "WV", "TOYOTA"];

    if (index === "length") {
        alert(meaning.length);
    }
    else {
        let parsedIndex = parseInt(index);
        let element = meaning[parsedIndex];
        alert(element);
    }

}

{   //  Item change

    let index = prompt("Введите индекс");
    let meaning = prompt("Введите значение");
    let arr = [];
    let parsedIndex = parseInt(index);

    arr[parsedIndex] = meaning;

    alert(arr);

}

{   //  Multiply table, Multiply table slice
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    const newTable = arr.slice(1).map(row => row.slice(1).map(cell => cell)
    );
}

{   //  IndexOf Word
    let str = prompt("Введите строку из нескольких слов:");
    let word = prompt("Введите слово, которое нужно найти:");

    let wordsMasive = str.split(" ");

    let index = wordsMasive.indexOf(word);

    if (index !== -1) {
        let wordPosition = index + 1;
        console.log(`Слово "${word}" находится на ${wordPosition}-м месте в строке.`);
    } else {
        console.log(`Слово "${word}" не найдено в строке.`);
    }

}

{   //  Reverse, Reverse2
    let originalArr = [];

    for (let i = 0; i < 5; i++) {
        let element = prompt(`Введите элемент ${i + 1}:`);
        originalArr.push(element);
    }

    let reversedArr = [];

    while (originalArr.length > 0) {
        let element = originalArr.pop();
        reversedArr.push(element);
    }
    while (reversedArr.length > 0) {
        let element = reversedArr.shift();
        originalArr.unshift(element);
    }

    console.log("Исходный массив:", originalArr);
    console.log("Массив в обратном порядке:", reversedArr);

}

{   //  Copy, Deep Copy
    let copyTable = arr.slice();
    let deepCopyTable = JSON.parse(JSON.stringify(arr));
}

{   //  Array Equals

    let arr = [1, 2, 3, 4, 5];
    let arr2 = JSON.parse(JSON.stringify(arr));

    console.log(arr);
    console.log(arr2);
    console.log(arr === arr2);
}

{   //  Flat
    let arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];

    let flatArr = [].concat(...arr);

    console.log(flatArr);
    console.log(flatArr.length);


}

{   //  Destruct, Destruct default
    let str = prompt("Введите строку:");
    let [firstLetter = '!', , , , fifthLetter = '!', , , , ninthLetter = '!'] = str;

    console.log(`Первая буква: ${firstLetter}`);
    console.log(`Пятая буква: ${fifthLetter}`);
    console.log(`Девятая буква: ${ninthLetter}`);
}

{   //  Multiply table rest
    let arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];

    let [
        [, ...firstRow],
        [, ...secondRow],
        [, ...thirdRow],
        [, ...fourthRow]
    ] = arr;
    let flatArr = [...firstRow, ...secondRow, ...thirdRow, ...fourthRow].filter(num => num !== 0);
    console.log(flatArr);

}

{   //  For Alert
    let names = ["John", "Paul", "George", "Ringo"];

    for (let name of names) {
        alert(name);
    }
}

{   //  For Select Option
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";

    for (const currency of currencies) {
        str += `<option value="${currency}">${currency}</option>`;
    }

    str += "</select>";
    document.write(str);

}

{   //  For Table Horizontal
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table><tr>";

    for (const name of names) {
        str += `<td>${name}</td>`;
    }

    str += "</tr></table>";
    document.write(str);

}

{   //  For Table Vertical
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table>";

    for (const name of names) {
        str += "<tr><td>" + name + "</td></tr>";
    }

    str += "</table>";
    document.write(str);

}

{   //  For Table Letters
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<table>";

    for (const currency of currencies) {
        str += "<tr>";

        for (const letter of currency) {
            str += "<td>" + letter + "</td>";
        }

        str += "</tr>";
    }

    str += "</table>";
    document.write(str);


}

{   //  For Multiply Table
    let arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    document.write("<table>");

    for (const row of arr) {
        document.write("<tr>");

        for (const cell of row) {
            document.write("<td>" + cell + "</td>");
        }

        document.write("</tr>");
    }

    document.write("</table>");
}

{   //  Function Capitalize
    const capitalize = str => {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (i === 0) {
                result += str[i].toUpperCase();
            } else {
                result += str[i].toLowerCase();
            }
        }
        return result;
    };

    console.log(capitalize("cANBerRa"));

}

{   //  Map Capitalize
    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    let inputString = prompt("Введите строку:");
    let words = inputString.split(" ");
    let capitalizedWords = words.map(word => capitalize(word));
    let result = capitalizedWords.join(" ");

    console.log(result);
}

{   //  Filter Lexics

    let inputString = prompt("Введите строку:");
    let words = inputString.split(" ");
    let invalidWords = ["чай", "кофе", "пиво"];

    let filteredWords = words.filter(word => !invalidWords.includes(word));
    let result = filteredWords.join(" ");

    console.log(result);

}

{   //  Beep Lexics
    let inputString = prompt("Введите строку:");
    let words = inputString.split(" ");
    let forbiddenWords = ["чай", "кофе", "пиво"];

    let filteredWords = words.map(word => forbiddenWords.includes(word) ? "BEEP" : word);
    let result = filteredWords.join(" ");

    console.log(result);

}

{   //  Reduce HTML
    let currencies = ["USD", "EUR", "GBP", "UAH"];
    let selectOptions = currencies.reduce((accumulator, currency) => {
        return accumulator + `<option>${currency}</option>`;
    }, "");

    let str = `<select>${selectOptions}</select>`;

    console.log(str);

}

{   //  For Brackets Hell Check
    const line = prompt("Введите строку со скобками:");
    const bracketsStack = [];
    let i = 0;
    
    for (const character of line) {
      if (character === '[' || character === '(' || character === '{') {
        bracketsStack.push({ char: character, position: i });
      } else if (character === ']' || character === ')' || character === '}') {
        if (bracketsStack.length === 0) {
          console.log(`Ошибка: непарная закрывающая скобка "${character}" на позиции ${i}`);
          break;
        }
    
        const lastBracket = bracketsStack.pop();
        if (
          (character === ']' && lastBracket.char !== '[') ||
          (character === ')' && lastBracket.char !== '(') ||
          (character === '}' && lastBracket.char !== '{')
        ) {
          console.log(`Ошибка: непарная закрывающая скобка "${character}" на позиции ${i}`);
          console.log(`Ожидалась открывающая скобка "${lastBracket.char}" на позиции ${lastBracket.position}`);
          break;
        }
      }
    
      i++;
    }
    
    if (bracketsStack.length === 0) {
      console.log("Все скобки в строке сбалансированы");
    } else {
      const lastBracket = bracketsStack[bracketsStack.length - 1];
      console.log(`Ошибка: непарная открывающая скобка "${lastBracket.char}" на позиции ${lastBracket.position}`);
    }
    

}