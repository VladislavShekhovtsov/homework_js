{   //  Arrow to Functions
    function createPerson(name, surname) {
        return {
            name: name,
            surname: surname,
            getFullName: function () {
                return `${this.name} ${this.surname}`;
            }
        };
    }
    const a = createPerson("Вася", "Пупкін");
    const b = createPerson("Ганна", "Іванова");
    const c = createPerson("Єлизавета", "Петрова");
    console.log(a.getFullName()); // Вася Пупкін
    a.fatherName = 'Іванович';
    console.log(a.getFullName()); // Вася Іванович Пупкін
    console.log(b.getFullName()); // Ганна Іванова

};

{   //  createPersonClosure
    function createPersonClosure(name, surname) {
        let age;
        let fatherName;
        function validateName(value) {
            return typeof value === 'string' && value.length > 0 && value[0] === value[0].toUpperCase();
        }
        function validateAge(value) {
            return typeof value === 'number' && value >= 0 && value <= 100;
        }
        function getName() {
            return name;
        }
        function getSurname() {
            return surname;
        }
        function getFatherName() {
            return fatherName;
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            return `${name} ${surname} ${fatherName}`;
        }
        function setName(newName) {
            if (validateName(newName)) {
                name = newName;
            }
            return name;
        }
        function setSurname(newSurname) {
            if (validateName(newSurname)) {
                surname = newSurname;
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (validateName(newFatherName)) {
                fatherName = newFatherName;
            }
            return fatherName;
        }
        function setAge(newAge) {
            if (validateAge(newAge)) {
                age = newAge;
            }
            return age;
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName: function (newFullName) {
                const parts = newFullName.split(' ');
                if (parts.length === 3 && validateName(parts[0]) && validateName(parts[1]) && validateName(parts[2])) {
                    name = parts[0];
                    surname = parts[1];
                    fatherName = parts[2];
                }
                return `${name} ${surname} ${fatherName}`;
            }
        };
    }
    const a = createPersonClosure("Вася", "Пупкин");
    const b = createPersonClosure("Анна", "Иванова");
    console.log(a.getName()); // Вася
    a.setAge(15);
    a.setAge(150); // Не изменяет значение
    b.setFullName("Петровая Анна Николаевна");
    console.log(b.getFatherName()); // Николаевна
};

{   //  createPersonClosureDestruct
    function createPersonClosureDestruct({ name = '', surname = '', age = 0, fatherName = '' }) {
        function validateName(value) {
            return typeof value === 'string' && value.length > 0 && value[0] === value[0].toUpperCase();
        }
        function validateAge(value) {
            return typeof value === 'number' && value >= 0 && value <= 100;
        }
        function getName() {
            return name;
        }
        function getSurname() {
            return surname;
        }
        function getFatherName() {
            return fatherName;
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            return `${name} ${surname} ${fatherName}`;
        }
        function setName(newName) {
            if (validateName(newName)) {
                name = newName;
            }
            return name;
        }
        function setSurname(newSurname) {
            if (validateName(newSurname)) {
                surname = newSurname;
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (validateName(newFatherName)) {
                fatherName = newFatherName;
            }
            return fatherName;
        }
        function setAge(newAge) {
            if (validateAge(newAge)) {
                age = newAge;
            }
            return age;
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName: function (newFullName) {
                const parts = newFullName.split(' ');
                if (parts.length === 3 && validateName(parts[0]) && validateName(parts[1]) && validateName(parts[2])) {
                    name = parts[0];
                    surname = parts[1];
                    fatherName = parts[2];
                }
                return `${name} ${surname} ${fatherName}`;
            }
        };
    }
    const a = createPersonClosureDestruct(createPerson("Вася Пупкин"));
    const b = createPersonClosureDestruct({ name: 'Николай', age: 75 });
    console.log(a.getName()); // Вася
    console.log(b.getFullName()); // Николай
};

{   //  isSorted, Test isSorted
    function isSorted(...args) {
        if (args.length === 0) {
            return true;
        }
        let prev = args[0];
        for (let i = 1; i < args.length; i++) {
            const current = args[i];
            if (typeof prev !== 'number' || typeof current !== 'number' || current <= prev) {
                return false;
            }
            prev = current;
        }
        return true;
    }
    isSorted(1, 2, 3, 4, 5, 6);
    const inputArray = [];
    let userInput = prompt('Введите число (или "Отмена" для завершения):');
    while (userInput !== null) {
        const number = parseFloat(userInput);
        if (!isNaN(number)) {
            inputArray.push(number);
        }
        userInput = prompt('Введите число (или "Отмена" для завершения):');
    }
    console.log('Введенные данные:', inputArray);
    console.log('Результат:', isSorted(...inputArray));

};

{   //  personForm
    function personForm(parentElement, person) {
        const nameInput = createInputField('Имя:', person.getName(), person.setName);
        const surnameInput = createInputField('Фамилия:', person.getSurname(), person.setSurname);
        const fatherNameInput = createInputField('Отчество:', person.getFatherName(), person.setFatherName);
        const ageInput = createInputField('Возраст:', person.getAge(), person.setAge);
        const fullNameInput = createInputField('ФИО:', person.getFullName(), person.setFullName);
        parentElement.append(nameInput, surnameInput, fatherNameInput, ageInput, fullNameInput);
    }
    function createInputField(labelText, value, setValue) {
        const label = document.createElement('label');
        label.textContent = labelText;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = value;
        input.addEventListener('input', (event) => {
            const newValue = event.target.value.trim();
            const updatedValue = setValue(newValue);
            input.value = updatedValue !== undefined ? updatedValue : value;
        });
        label.appendChild(input);
        return label;
    }
    const parentElement = document.getElementById('form-container');
    const person = createPersonClosureDestruct({ name: 'John', surname: 'Doe', age: 30 });
    personForm(parentElement, person);

};

