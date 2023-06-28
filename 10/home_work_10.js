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
    function createPersonForm(parentElement, personData) {
        const { getName, getSurname, getPatronymic, getAge, getFullName, setName, setSurname, setPatronymic, setAge } = personData;
        const nameInput = document.createElement('input');
        const surnameInput = document.createElement('input');
        const patronymicInput = document.createElement('input');
        const ageInput = document.createElement('input');
        const fullNameInput = document.createElement('input');
        nameInput.value = getName();
        surnameInput.value = getSurname();
        patronymicInput.value = getPatronymic();
        ageInput.value = getAge();
        fullNameInput.value = getFullName();
        nameInput.oninput = (event) => {
            setName(event.target.value);
            fullNameInput.value = getFullName();
        };
        surnameInput.oninput = (event) => {
            setSurname(event.target.value);
            fullNameInput.value = getFullName();
        };
        patronymicInput.oninput = (event) => {
            setPatronymic(event.target.value);
            fullNameInput.value = getFullName();
        };
        ageInput.oninput = (event) => {
            setAge(event.target.value);
        };
        parentElement.appendChild(nameInput);
        parentElement.appendChild(surnameInput);
        parentElement.appendChild(patronymicInput);
        parentElement.appendChild(ageInput);
        parentElement.appendChild(fullNameInput);
    }
    const personData = createPersonClosure(); 
    const parentElement = document.getElementById('form-container'); 
    createPersonForm(parentElement, personData);
};

