{   //  while confirm
    do {
        let result = confirm('Нажмите "OK" для продолжения или "Отмена" для завершения.');
    } while (!result);
    alert('Цикл завершен.');
};

{   //  array fill
    const arr = [];
    let elementsArr;
    while (elementsArr = prompt('Введите элементы массива')) {
        if (elementsArr !== null) {
            arr.push(elementsArr);
        }
    }
    console.log(arr);
};

{   //  array fill nopush
    const arr = [];
    let elementsArr;
    let i = 0
    while (elementsArr = prompt('Введите элементы массива')) {
        if (elementsArr === null) {
            break;
        }
        arr[i] = elementsArr;
        i++;
    }
    console.log(arr);

};

{   //  infinite probability
    let nuberRandom = 0;
    while (Math.random() < 0.9) {
        if (Math.random() > 0.9) {
            break;
        }
        nuberRandom++;
        console.log(Math.random());
    }
    alert(`Прошло ${nuberRandom} итераций`);
};

{   //  empty loop
    while (true) {
        const userInput = prompt('Введите что-нибудь:');
        if (userInput === null) {
            continue;
        }
        if (userInput === '') {
            break;
        }
    }
};

{   //  progression sum
    let N = parseInt(prompt('Введите значение N:'));
    let sum = 0;
    for (let i = 1; i <= N; i += 3) {
        sum += i;
    }
    console.log('Сумма арифметической прогрессии:', sum);
};

{   //  chess one line
    let length = 7;
    let str = '';
    for (let i = 0; i < length; i++) {
        if (i === 0 || i === length - 1) {
            str += ' ';
        } else {
            str += '#';
        }
    }
    console.log(result);
};

{   //  numbers
    let str = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            str += j;
        }
        str += '\n';
    }
    console.log(str);
};

{   //  chess
    const rows = 10;
    const columns = 13;
    let result = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if ((i + j) % 2 === 0) {
                result += '#';
            } else {
                result += '.';
            }
        }
        result += '\n';
    }
    console.log(result);

};

{   //  cubes
    const n = parseInt(prompt('Введите количество элементов:'));
    const cubes = [];
    for (let i = 0; i < n; i++) {
        cubes.push(i ** 3);
    }
    console.log(cubes);
};

{   //  multiply table
    const size = 10;
    const table = [];
    for (let i = 0; i < size; i++) {
        table[i] = [];
        for (let j = 0; j < size; j++) {
            table[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(table);
};

{   //  read array of objects
    function readArrayOfObjects() {
        const arrayOfObjects = [];
        while (true) {
            const object = {};
            while (true) {
                const key = prompt('Введите ключ:');
                if (key === null) {
                    break;
                }
                const value = prompt('Введите значение:');
                if (value === null) {
                    break;
                }
                object[key] = value;
            }
            arrayOfObjects.push(object);
            const shouldContinue = confirm('Хотите продолжить ввод объектов?');
            if (!shouldContinue) {
                break;
            }
        }
        return arrayOfObjects;
    }
    const result = readArrayOfObjects();
    console.log(result);
};

{   //  Ромбік
    function generateDiamond(size) {
        let diamond = '';
        const middle = Math.floor(size / 2);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (Math.abs(j - middle) <= i && i <= size - 1 - Math.abs(j - middle)) {
                    diamond += '#';
                } else {
                    diamond += '.';
                }
            }
            diamond += '\n';
        }
        return diamond;
    }
    const size = 11; 
    const diamond = generateDiamond(size);
    console.log(diamond);
};

{   //  DOM: multiply table
    function createMultiplicationTable(size) {
        const table = document.createElement('table');
        for (let i = 1; i <= size; i++) {
            const row = document.createElement('tr');
            for (let j = 1; j <= size; j++) {
                const cell = document.createElement('td');
                cell.innerText = i * j;
                cell.addEventListener('mouseover', function () {
                    this.style.backgroundColor = 'yellow';
                    row.style.backgroundColor = 'lightblue';
                    table.querySelectorAll(`tr td:nth-child(${j})`).forEach(td => {
                        td.style.backgroundColor = 'lightgreen';
                    });
                });
                cell.addEventListener('mouseout', function () {
                    this.style.backgroundColor = '';
                    row.style.backgroundColor = '';
                    table.querySelectorAll('td').forEach(td => {
                        td.style.backgroundColor = '';
                    });
                });
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        return table;
    }
    const size = 10; 
    const multiplicationTable = createMultiplicationTable(size);
    document.body.appendChild(multiplicationTable);
};