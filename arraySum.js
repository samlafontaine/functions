const sum = (array) => {
    let sum = 0;
    for (i=0; i<array.length; i++) {
        sum += array[i];
    } return sum;
}

console.log(sum([1, 2, 3]));

