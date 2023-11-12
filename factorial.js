const factorial = (num) => {
    let fac = num;
    let index = num-1;
    for (i=1; i<num; i++) {
        fac *= index;
        index --;
    } return fac;
}

console.log(factorial(6));