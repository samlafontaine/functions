const formatNumber = (number) => {
    let string = '' + number;
    let stringSplit = string.split('');
    let formattedString = [];
    let index = 0;
    for (i=stringSplit.length-1; i>=0; i--) {
        index ++;
        if (index % 3 === 0 && i != 0) {
            formattedString.push("," + stringSplit[i])
        } else formattedString.push(stringSplit[i]);
    } return formattedString.reverse().join('');
}

console.log(formatNumber(1500000));