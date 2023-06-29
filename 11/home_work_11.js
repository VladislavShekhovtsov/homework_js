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