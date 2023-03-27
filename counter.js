var counter1 = { name: 'Counter #1', value: 0, max: 3 };
var counter2 = { name: 'Coutner #2', value: 0, max: 6 };
function incrementeCounter(counter) {
    if (counter.value <= counter.max) {
        counter.value += 1;
        console.log("Counter ".concat(counter.name, " value is npw ").concat(counter.value));
    }
    else {
        console.error("Reached max (".concat(counter.max, ") - can't increment ").concat(counter.name));
    }
}
function canIncrementCounter(counter) {
    return counter.value < counter.max;
}
while (canIncrementCounter(counter1)) {
    incrementeCounter(counter1);
}
;
while (canIncrementCounter(counter2)) {
    incrementeCounter(counter2);
}
;
