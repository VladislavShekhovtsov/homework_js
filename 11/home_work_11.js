{   //  makeProfileTimer
    function makeProfileTimer() {
        const startTime = performance.now();
        return function () {
            const endTime = performance.now();
            return endTime - startTime;
        };
    }
    const timer = makeProfileTimer();
    alert('Измеряем время работы этого alert');
    alert(timer());
    const timer2 = makeProfileTimer();
    prompt('');
    alert(`Время работы двух аlert и одного prompt ${timer()}`);
    alert(`Время работы prompt и предыдущего alert ${timer2()}`);
}

{   //  makeSaver
    function makeSaver(fn) {
        let result;
        return function () {
            if (result === undefined) {
                result = fn();
            }
            return result;
        };
    }
    let saver = makeSaver(Math.random);
    let value1 = saver();
    let value2 = saver();
    alert(`Random: ${value1} === ${value2}`);
    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
    });
    let value3 = saver2();
    let value4 = saver2();
    console.log(value3 === value4);
    let namePrompt = prompt.bind(window, 'Как тебя зовут?');
    let nameSaver = makeSaver(namePrompt);
    alert(`Привет! Prompt еще не было!`);
    alert(`Привет ${nameSaver()}. Как только запустился prompt, первый и последний раз`);
    alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`);
}
{   //  myBind
    function myBind(fn, context, defaults) {
        return function (...args) {
            const mergedArgs = defaults.map((defaultValue, index) =>
                args[index] === undefined ? defaultValue : args[index]
            );
            return fn.apply(context, mergedArgs);
        };
    }

    let pow5 = myBind(Math.pow, Math, [undefined, 5]);
    let cube = myBind(Math.pow, Math, [undefined, 3]);
    console.log(pow5(2));
    console.log(pow5(4));
    console.log(cube(3));
    let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
    console.log(chessMin(-1, -5, 3, 15));
    let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
    let someNumber = zeroPrompt("Введите число");
    console.log(someNumber);
    const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
    console.log(bindedJoiner('a', 'c', 'd'));
    console.log(bindedJoiner('1', '2', '3'));
}

{   //  checkResult
    function checkResult(original, validator) {
        function wrapper(...params) {
            let result = original.apply(this, params);
            while (!validator(result)) {
                result = original.apply(this, params);
            }
            return result;
        }
        return wrapper;
    }

    const numberPrompt = checkResult(prompt, x => !isNaN(+x));
    let number = +numberPrompt.call(window, "Введіть число", "0");
    const gamePrompt = checkResult(prompt, x =>
        ["камень", "ножиці", "папір"].includes(x.toLowerCase())
    );
    const turn = gamePrompt.call(window, "Введіть щось зі списку: 'камень', 'ножиці', 'папір'");
    const RandomHigh = checkResult(
        () => Math.random(),
        x => x > 0.5 && x <= 1
    );
    const AlwaysSayYes = checkResult(confirm, x => x === true);
    const respectMe = checkResult(() => prompt("Введите что-нибудь"), x => x !== null && x !== "");
    console.log(RandomHigh()); 
    console.log(AlwaysSayYes("Согласны?")); 
    console.log(respectMe()); 
}