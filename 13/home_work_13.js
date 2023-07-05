{   //  Person Constructor
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        };

        Object.defineProperty(this, "fatherName", {
            get: function () {
                return this.firstName + " " + this.middleName + " " + this.lastName;
            },
            set: function (value) {
                const names = value.split(" ");
                if (names.length === 3) {
                    this.firstName = names[0];
                    this.middleName = names[1];
                    this.lastName = names[2];
                }
            },
        });
    }
    const a = new Person("Вася", "Пупкін");
    const b = new Person("Ганна", "Іванова");
    const c = new Person("Єлизавета", "Петрова");
    console.log(a.getFullName());
    a.fatherName = "Іванович";
    console.log(b.getFullName());
}

{   //  Person Prototype
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };

    Object.defineProperty(Person.prototype, "fatherName", {
        get: function () {
            return this.firstName + " " + this.middleName + " " + this.lastName;
        },
        set: function (value) {
            const names = value.split(" ");
            if (names.length === 3) {
                this.firstName = names[0];
                this.middleName = names[1];
                this.lastName = names[2];
            }
        },
    });
    const a = new Person("Вася", "Пупкін");
    const b = new Person("Ганна", "Іванова");
    const c = new Person("Єлизавета", "Петрова");
    console.log(a.getFullName());
    a.fatherName = "Іванович";
    console.log(b.getFullName());
}

{   //  Store
    function Store(reducer) {
        const state = reducer(undefined, {});
        const subscribers = [];

        this.dispatch = function (action) {
            state = reducer(state, action);
            subscribers.forEach(function (subscriber) {
                subscriber();
            });
        };

        this.getState = function () {
            return state;
        };

        this.subscribe = function (subscriber) {
            subscribers.push(subscriber);
        };
    }

    const store = new Store(kioskReducer);
}

{
    function Password(parent, open) {
        const input = document.createElement("input");
        input.type = "password";
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Toggle";
        parent.appendChild(input);
        parent.appendChild(toggleButton);
        this.setValue = function (value) {
            input.value = value;
        };
        this.getValue = function () {
            return input.value;
        };
        this.setOpen = function (isOpen) {
            input.type = isOpen ? "text" : "password";
            if (typeof this.onOpenChange === "function") {
                this.onOpenChange(isOpen);
            }
        };
        this.getOpen = function () {
            return input.type === "text";
        };
        this.onChange = function () { };
        input.addEventListener("input", () => {
            if (typeof this.onChange === "function") {
                this.onChange(input.value);
            }
        });
        toggleButton.addEventListener("click", () => {
            this.setOpen(!this.getOpen());
        });
        this.setOpen(open);
    }

    const p = new Password(document.body, true);
    p.onChange = function (data) {
        console.log(data);
    };
    p.onOpenChange = function (open) {
        console.log(open);
    };
    p.setValue("qwerty");
    console.log(p.getValue());
    p.setOpen(false);
    console.log(p.getOpen());
}

{   //  LoginForm, LoginForm Constructor
    function LoginForm(parent, onLogin) {
        const inputLogin = document.createElement("input");
        inputLogin.type = "text";
        inputLogin.placeholder = "Логін";

        const inputPassword = document.createElement("input");
        inputPassword.type = "password";
        inputPassword.placeholder = "Пароль";

        const button = document.createElement("button");
        button.textContent = "Увійти";
        button.disabled = true;

        parent.appendChild(inputLogin);
        parent.appendChild(inputPassword);
        parent.appendChild(button);

        inputLogin.addEventListener("input", validateFields);
        inputPassword.addEventListener("input", validateFields);
        button.addEventListener("click", handleLogin);

        function validateFields() {
            const login = inputLogin.value.trim();
            const password = inputPassword.value.trim();
            button.disabled = login === "" || password === "";
        }

        function handleLogin() {
            const login = inputLogin.value.trim();
            const password = inputPassword.value.trim();
            if (!button.disabled && typeof onLogin === "function") {
                onLogin(login, password);
            }
        }

        this.getLogin = function () {
            return inputLogin.value.trim();
        };

        this.setLogin = function (value) {
            inputLogin.value = value;
            validateFields();
        };

        this.getPassword = function () {
            return inputPassword.value.trim();
        };

        this.setPassword = function (value) {
            inputPassword.value = value;
            validateFields();
        };

        Object.defineProperty(this, "onLogin", {
            get: function () {
                return onLogin;
            },
            set: function (callback) {
                if (typeof callback === "function") {
                    onLogin = callback;
                } else {
                    throw new Error("onLogin must be a function");
                }
            },
        });
    }

    const form = new LoginForm(document.body, function (login, password) {
        console.log("Logging in with:", login, password);
    });

    console.log(form.getLogin());
    form.setLogin("admin");
    console.log(form.getPassword());
    form.setPassword("password");

    form.onLogin = function (login, password) {
        console.log("Custom onLogin callback:", login, password);
    };

    if (typeof form.onLogin === "function") {
        form.onLogin(form.getLogin(), form.getPassword());
    }
}

{   //  Password Verify
    function Password(parent, open) {
        const inputPassword = document.createElement("input");
        inputPassword.type = open ? "text" : "password";
        inputPassword.placeholder = "Пароль";
        const inputConfirmPassword = document.createElement("input");
        inputConfirmPassword.type = open ? "text" : "password";
        inputConfirmPassword.placeholder = "Подтвердите пароль";
        parent.appendChild(inputPassword);
        parent.appendChild(inputConfirmPassword);
        inputPassword.addEventListener("input", validatePasswords);
        inputConfirmPassword.addEventListener("input", validatePasswords);
        function validatePasswords() {
            const password = inputPassword.value;
            const confirmPassword = inputConfirmPassword.value;
            if (password === confirmPassword) {
                inputPassword.style.border = "1px solid #ccc";
                inputConfirmPassword.style.border = "1px solid #ccc";
            } else {
                inputPassword.style.border = "1px solid red";
                inputConfirmPassword.style.border = "1px solid red";
            }
        }

        this.getPassword = function () {
            return inputPassword.value;
        };

        this.setPassword = function (value) {
            inputPassword.value = value;
            validatePasswords();
        };

        this.getOpen = function () {
            return inputPassword.type === "text";
        };

        this.setOpen = function (value) {
            if (value) {
                inputPassword.type = "text";
                inputConfirmPassword.style.display = "none";
            } else {
                inputPassword.type = "password";
                inputConfirmPassword.style.display = "block";
            }
            validatePasswords();
        };
    }
    const passwordContainer = document.getElementById("password-container");
    const password = new Password(passwordContainer, false);
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Показать пароль";
    toggleButton.addEventListener("click", function () {
        const open = !password.getOpen();
        password.setOpen(open);
        toggleButton.textContent = open ? "Спрятать пароль" : "Показать пароль";
    });

    passwordContainer.appendChild(toggleButton);
}