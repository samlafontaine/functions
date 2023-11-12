const factorial = (num) => {
    let fac = num;
    let index = num-1;
    for (i=1; i<num; i++) {
        fac *= index;
        index --;
    } return fac;
}

// just some text

console.log(factorial(6));