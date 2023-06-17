{   //  blocks

    let a = 10
    {
        let b = 20
        {
            let c = 30
            //a = 100, b = 21, c = 30, d = не обозначенно 
            b++
            a *= 10
        }
        {
            let c = 50
            //a = 10, b = 521, c = 50, d = не обозначенно
            b += 500
        }
        {
            const a = 100500
            const d = "value"
            //a = 100500, b = 521, c = 50, d = "value"
            {
                let a = -50
                b = 1000
                //a = -50, b = 1000б с = 50, d = "value"
            }
            //a = 100500, b = 1000, c = 50, d = "value"
        }
        //a = 100500, b = 20, c = 50, d = "value"
    }
    //a = 10, b, c, d = не обозначенно
};

{   //  comparison if
    var age = +prompt("Скільки вам років?", "");

    if (age < 0) {
        alert("Возраст не может быть отрицательным");
    } else if (age < 18) {
        alert("школяр");
    } else if (age >= 18 && age < 30) {
        alert("молодь");
    } else if (age >= 30 && age < 45) {
        alert("зрілість");
    } else if (age >= 45 && age < 60) {
        alert("захід сонця");
    } else if (age >= 60) {
        alert("як пенсія?");
    } else {
        alert("чи кіборг, чи KERNESS");
    }

};

{   //  switch: sizes
    const compareSizes = (size) => {
        switch (size) {
            case "XS":
                return "Это размер 44";
            case "S":
                return "Это размер 46";
            case "M":
                return "Это размер 48";
            case "L":
                return "Это размер 50";
            case "XL":
                return "Это размер 54";
            default:
                return "Неизвестный размер";
        }
    };

    const sizeInput = prompt("Введите размер (XS, S, M, L или XL):");
    const result = compareSizes(sizeInput);
    console.log(result);
};

{   //  switch: if
    let color = prompt("Введіть колір", "");
    if (color === "red") {
        document.write("<div style='background-color: red;'>червоний</div> <div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === "blue") {
        document.write("<div style='background-color: blue;'>синій</div> <div style='background-color: green;'>зелений</div>");
    }
    else if (color === "green") {
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
};

{   //  noswitch
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (drink in cases)
            cases[drink]()
        else
            cases.defaultKey()
    }

    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function () {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default() {
            console.log('шото я не зрозумів')
        }
    })
};

{   //  closure calc
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            const rates = data.rates; 

            const container = document.getElementById('currencyContainer');


            for (const currency in rates) {
                const button = document.createElement('button');
                button.innerHTML = currency; 

                button.onclick = () => {
                    const amount = prompt('Введите сумму в выбранной валюте:');
                    const rate = rates[currency]; 

                    const convertedAmount = amount / rate;

                    console.log(`${amount} ${currency} = ${convertedAmount} USD`);
                };

                container.appendChild(button);
            }
        });

};

{   //  closure calc 2
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            const rates = data.rates;
            const fromSelect = document.getElementById('from');
            const toSelect = document.getElementById('to');
            const rateDiv = document.getElementById('rate');
            const amountInput = document.getElementById('amount');
            const resultDiv = document.getElementById('result');

            for (const currency in rates) {
                const option = document.createElement('option');
                option.innerText = currency;
                fromSelect.append(option);

                const option2 = document.createElement('option');
                option2.innerText = currency;
                toSelect.append(option2);
            }

            fromSelect.onchange = toSelect.onchange = () => {
                const fromCurrency = fromSelect.value;
                const toCurrency = toSelect.value;
                const rate = rates[toCurrency] / rates[fromCurrency];
                rateDiv.innerHTML = `Кросскурс: 1 ${fromCurrency} = ${rate.toFixed(2)} ${toCurrency}`;
                updateResult();
            };

            amountInput.oninput = () => {
                updateResult();
            };

            function updateResult() {
                const fromCurrency = fromSelect.value;
                const toCurrency = toSelect.value;
                const amount = amountInput.value;
                const rate = rates[toCurrency] / rates[fromCurrency];
                const result = amount * rate;
                resultDiv.innerHTML = `Результат: ${result.toFixed(2)} ${toCurrency}`;
            }

            fromSelect.onchange();
        });

};

{   //  countries and cities
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
        .then(res => res.json())
        .then(data => {
            const countriesSelect = document.getElementById('countries');
            const citiesSelect = document.getElementById('cities');

            for (const country in data) {
                const option = document.createElement('option');
                option.innerText = country;
                countriesSelect.append(option);
            }

            countriesSelect.onchange = () => {
                citiesSelect.innerHTML = ''; 

                const selectedCountry = countriesSelect.value;
                const cities = data[selectedCountry];

                for (const city of cities) {
                    const option = document.createElement('option');
                    option.innerText = city;
                    citiesSelect.append(option);
                }
            };
        });
};