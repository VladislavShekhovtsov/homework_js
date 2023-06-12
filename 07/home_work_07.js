{   //  Temperature
    const convertTemperature = (temperature, fromUnit, toUnit) =>
        (toUnit === 'F') ? temperature * 1.8 + 32 : (temperature - 32) / 1.8;

};
{   //  RGB

    const convertToHex = (r, g, b) => `#${(r < 16 ? '0' : '') + r.toString(16)}${(g < 16 ? '0' : '') + g.toString(16)}${(b < 16 ? '0' : '') + b.toString(16)}`;

};

{   //  Flats
    const calculateFlatsInfo = (totalFloors, flatsPerFloor, flatNumber) => {
        const totalFlats = totalFloors * flatsPerFloor;
        const entrance = Math.ceil(flatNumber / totalFlats);
        const relativeFlatNumber = flatNumber % totalFlats;
        const floor = Math.ceil(relativeFlatNumber / flatsPerFloor);

        return {
            entrance,
            floor
        };
    };

};

{   //  Credentials
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const getCredentials = () => {
        const name = prompt("Введите ваше имя:");
        const surname = prompt("Введите вашу фамилию:");
        const fatherName = prompt("Введите ваше отчество:");

        const fullName = `${capitalize(surname)} ${capitalize(name)} ${capitalize(fatherName)}`;

        return {
            name,
            surname,
            fatherName,
            fullName
        };
    };

    const userCredentials = getCredentials();
    console.log(userCredentials);

};

{   //  New line
    const formatNewLine = (str) => {
        return str.replace(/\\n/g, '\n');
    };

    const inputString = prompt("Введите строку с подлинными переносами (используйте \\n для обозначения переноса):");
    const formattedString = formatNewLine(inputString);
    console.log(formattedString);

};

{   //  Prompt OR
    const promptOr = (message, defaultValue) => prompt(message) || defaultValue;

};

{   //  Login And Password
    const loginAndPassword = (correctLogin, correctPassword) => {
        const enteredLogin = prompt("Введите логин:");
        const enteredPassword = prompt("Введите пароль:");

        return enteredLogin === correctLogin && enteredPassword === correctPassword;
    };

    const correctLogin = "admin";
    const correctPassword = "12345";

    const isLoggedIn = loginAndPassword(correctLogin, correctPassword);
    console.log(isLoggedIn);

};

{   //  For Table
    const createMultiplyTable = (matrix) => {
        let htmlString = "<table>";

        for (let i = 0; i < matrix.length; i++) {
            htmlString += "<tr>";

            for (let j = 0; j < matrix[i].length; j++) {
                htmlString += `<td>${matrix[i][j]}</td>`;
            }

            htmlString += "</tr>";
        }

        htmlString += "</table>";

        return htmlString;
    };

    const multiplyTable = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const tableHTML = createMultiplyTable(multiplyTable);
    console.log(tableHTML);

};

{   //  Filter Lexics
    const filterLexics = (text, forbiddenWords) => {
        const words = text.split(" ");
        const filteredWords = words.filter(word => !forbiddenWords.includes(word));
        const filteredText = filteredWords.join(" ");
        return filteredText;
    };

    const inputText = "Это тестовая строка с некорректными словами: бляха, муха, пляшка, шабля.";
    const forbiddenWords = ["бляха", "муха", "пляшка", "шабля"];

    const filteredText = filterLexics(inputText, forbiddenWords);
    console.log(filteredText);

};

{   //  Currency Table
    const createCurrencyTable = () => {
        const currencyData = [
            { currency: "USD", rate: 1.2 },
            { currency: "EUR", rate: 0.8 },
            { currency: "GBP", rate: 0.6 },
        ];

        const tableData = currencyData.map(({ currency, rate }) => [currency, rate]);

        const tableHTML = createTable(tableData);
        console.log(tableHTML);
    };

    const createTable = (data) => {
        const tableRows = data.map((row) => {
            const tableCells = row.map((cell) => `<td>${cell}</td>`).join("");
            return `<tr>${tableCells}</tr>`;
        });
        return `<table>${tableRows.join("")}</table>`;
    };

    createCurrencyTable();

};

{   //  Form
    const createForm = (formData) => {
        const form = document.createElement("form");

        for (const key in formData) {
            const label = document.createElement("label");
            label.textContent = key;

            const input = document.createElement("input");
            input.setAttribute("name", key);
            input.setAttribute("value", formData[key]);

            form.appendChild(label);
            form.appendChild(input);
        }

        document.body.appendChild(form);
    };
};

{   //  Array of objects sort

    function sort(arr, fieldName, ascending = true) {
        const sortedArray = [...arr];

        sortedArray.sort((a, b) => {
            let valueA = a[fieldName];
            let valueB = b[fieldName];

            if (typeof valueA === 'number') {
                valueA = String(valueA);
            }

            if (typeof valueB === 'number') {
                valueB = String(valueB);
            }

            if (ascending) {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        return sortedArray;
    }

    var persons = [
        { name: "Іван", age: 17 },
        { name: "Марія", age: 35 },
        { name: "Олексій", age: 73 },
        { name: "Яків", age: 12 },
    ];

    var sortedByAgeAscending = sort(persons, "age");
    console.log(sortedByAgeAscending);

    var sortedByNameDescending = sort(persons, "name", false);
    console.log(sortedByNameDescending);

};

{   //  Calc Func
    function calculatePowerUsage(was, became) {
        let kilowattUsed = became - was;
        let payment = kilowattUsed * 1.7;

        return {
            kilowattUsed: kilowattUsed,
            payment: payment
        };
    }

    let was = 4290;
    let became = 4577;

    let calculationResult = calculatePowerUsage(was, became);
    console.log(calculationResult);

};