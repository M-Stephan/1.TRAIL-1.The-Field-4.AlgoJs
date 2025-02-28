let i = 1;

function div(number) {
    return number / 2;
}

function mult(number) {
    return number * 3;
}

while (i <= 100) {
    if (i % 2 === 0) {
        console.log(div(i));
    } else {
        console.log(mult(i));
    }
    i++;
}