{   //  Literals
    const cat = {
        age: 10,
        name: 'Barsik',
        color: 'green'
    };

}

{   //  Literals expand, Literals copy
    const cat = {};
    let key1 = prompt("Введите название первого ключа:");
    let value1 = prompt("Введите значение первого ключа:");

    let key2 = prompt("Введите название второго ключа:");
    let value2 = prompt("Введите значение второго ключа:");

    cat[key1] = value1;
    cat[key2] = value2;

    console.log(cat);

    let key3 = prompt("Введите название третьего ключа:");
    let value3 = prompt("Введите значение третьего ключа:");

    let newCat = Object.assign({}, obj);

    newCat[key3] = value3;

    console.log(newCat);
}

{   //  Html tree, Parent, Change OK, Destructure
    const tag = {
        "tagName": "body",
        "children": [
            {
                "tagName": "div",
                "children": [
                    {
                        "tagName": "span",
                        "children": [],
                        "attrs": {},
                        "textContent": "Enter a data please:"
                    },
                    {
                        "tagName": "br",
                        "children": [],
                        "attrs": {}
                    },
                    {
                        "tagName": "input",
                        "children": [],
                        "attrs": {
                            "type": "text",
                            "id": "name"
                        }
                    },
                    {
                        "tagName": "input",
                        "children": [],
                        "attrs": {
                            "type": "text",
                            "id": "surname"
                        }
                    }
                ],
                "attrs": {}
            },
            {
                "tagName": "div",
                "children": [
                    {
                        "tagName": "button",
                        "children": [],
                        "attrs": {
                            "id": "ok"
                        },
                        "textContent": "OK"
                    },
                    {
                        "tagName": "button",
                        "children": [],
                        "attrs": {
                            "id": "cancel"
                        },
                        "textContent": "Cancel"
                    }
                ],
                "attrs": {}
            }
        ],
        "attrs": {}
    }

    const secondButtonText = tag.children[1].children[1].textContent;

    console.log(secondButtonText);

    const secondInputId = tag.children[0].children[3].attrs.id;

    console.log(secondInputId);

    tag.children[0].teg = tag;
    tag.children[1].teg = tag;

    let newId = prompt("Введите новое значение атрибута 'id' для кнопки:");

    tag.children[1].children[0].attrs.id = newId;

    const { children: [{ children: [{ textContent: spanText }, , , { attrs: { id: InputId } }] }, { children: [, { textContent: ButtonText }] }] } = tag;
    console.log("Значение текста в теге span:", spanText);
    console.log("Значение текста во второй кнопке:", ButtonText);
    console.log("Значение атрибута id во втором input:", InputId);

}

{   //  Destruct array
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

    const [even1, even2, ...odds] = arr.filter(item => typeof item === "number" && item % 2 === 0);

    const letters = arr.filter(item => typeof item === "string");

    console.log("Переменная even1:", even1);
    console.log("Переменная even2:", even2);
    console.log("Переменная odd1:", odds[0]);
    console.log("Переменная odd2:", odds[1]);
    console.log("Переменная odd3:", odds[2]);
    console.log("Массив с буквами:", letters);
}

{   //  Destruct string

    let arr = [1, "abc"];

    const [number, [s1, s2, s3]] = arr;

    console.log("Переменная number:", number);
    console.log("Переменная s1:", s1);
    console.log("Переменная s2:", s2);
    console.log("Переменная s3:", s3);
}

{   //  Destruct 2
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    };

    const { children: [{ name: name1 }, { name: name2 }] } = obj;

    console.log("Переменная name1:", name1);
    console.log("Переменная name2:", name2);

}

{   //  Destruct 3

    let arr = [1, 2, 3, 4, 5, 6, 7, 10];

    const [a, b, ...rest] = arr;
    const length = arr.length;

    console.log("Переменная a:", a);
    console.log("Переменная b:", b);
    console.log("Длина массива:", length);

}

{   //  Copy delete
    const cat = {
        age: 10,
        name: 'Barsik',
        color: 'green'
    };

    const excludedKey = prompt('Введите ключ, который нужно исключить');

    const { [excludedKey]: excluded, ...rest } = obj;

    console.log('Копия объекта без исключенного ключа:', rest);

}

{   //  Currency real rate
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const fromCurrency = prompt('Введите код входной валюты (например, USD)');
            const toCurrency = prompt('Введите код валюты, в которую нужно конвертировать (например, EUR)');
            const amount = parseFloat(prompt('Введите сумму во входной валюте'));

            const exchangeRate = data.rates[toCurrency.toUpperCase()];
            const convertedAmount = amount * exchangeRate;

            console.log(`Результат конвертации: ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
        });

}

{   //  Currency drop down
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const currencies = Object.keys(data.rates);

            let selectHTML = '<select>';

            currencies.forEach(currency => {
                selectHTML += `<option value="${currency}">${currency}</option>`;
            });

            selectHTML += '</select>';

            console.log('HTML-код выпадающего списка:\n', selectHTML);
        })
        .catch(error => {
            console.log('Ошибка при загрузке данных:', error);
        });



}

{   //  Currency table
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const tableElement = document.getElementById('currencyTable');

            const rates = data.rates;

            let tableHTML = '';

            tableHTML += '<tr><th>Валюта</th>';

            for (const currency1 in rates) {
                tableHTML += `<th>${currency1}</th>`;
            }

            tableHTML += '</tr>';

            for (const currency1 in rates) {
                tableHTML += `<tr><td>${currency1}</td>`;

                for (const currency2 in rates) {
                    const rate = rates[currency2] / rates[currency1];
                    tableHTML += `<td>${rate.toFixed(2)}</td>`;
                }

                tableHTML += '</tr>';
            }

            tableElement.innerHTML = tableHTML;
        })
        .catch(error => {
            console.log('Ошибка при загрузке данных:', error);
        });

}

{   //  Form    

    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    };

    const form = document.createElement('form');

    for (const key in car) {
        if (car.hasOwnProperty(key)) {
            const label = document.createElement('label');
            label.textContent = key;

            const input = document.createElement('input');
            input.name = key;
            input.type = typeof car[key] === 'boolean' ? 'checkbox' : 'text';
            input.value = car[key];

            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(document.createElement('br'));
        }
    }

    document.body.appendChild(form);


}

{   //  Table
    const data = [
        {
            "Name": "chevrolet chevelle malibu",
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Origin": "USA"
        },
        {
            "Name": "buick skylark 320",
            "Miles_per_Gallon": 15,
            "Cylinders": 8,
            "Displacement": 350,
            "Horsepower": 165,
            "Weight_in_lbs": 3693,
            "Acceleration": 11.5,
            "Year": "1970-01-01"
        },
        {
            "Miles_per_Gallon": 18,
            "Cylinders": 8,
            "Displacement": 318,
            "Horsepower": 150,
            "Weight_in_lbs": 3436,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
        {
            "Name": "amc rebel sst",
            "Miles_per_Gallon": 16,
            "Cylinders": 8,
            "Displacement": 304,
            "Horsepower": 150,
            "Year": "1970-01-01",
            "Origin": "USA"
        }
    ];

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const labels = data.reduce((acc, obj) => {
        for (const key in obj) {
            if (!acc.includes(key)) {
                acc.push(key);
            }
        }
        return acc;
    }, []);

    labels.forEach(label => {
        const th = document.createElement('th');
        th.textContent = label;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');

    data.forEach(obj => {
        const row = document.createElement('tr');

        labels.forEach(label => {
            const td = document.createElement('td');
            td.textContent = obj[label] || '';
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);

}