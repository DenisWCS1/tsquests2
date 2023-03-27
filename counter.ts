interface Counter {
    name: string;
    value: number;
    max: number;
}

const counter1 = { name: 'Counter #1', value: 0, max: 3 };
const counter2 = { name: 'Coutner #2', value: 0, max: 6 };

function incrementeCounter(counter: Counter) {
    if (counter.value <= counter.max) {
        counter.value += 1;
        console.log(`Counter ${counter.name} value is npw ${counter.value}`);
    }
    else {
        console.error(`Reached max (${counter.max}) - can't increment ${counter.name}`)
    }
}

function canIncrementCounter(counter: Counter) {
    return counter.value < counter.max;
}

while (canIncrementCounter(counter1)) {
    incrementeCounter(counter1);
};
while (canIncrementCounter(counter2)) {
    incrementeCounter(counter2)
};