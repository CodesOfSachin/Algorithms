function factorial(n) {
    let result = 1;
    if(n < 2) {
        return result;
    }
    
    for(let i = 2; i <= n; i++ ) {
        result = result * i;
    }
    return result
}

console.log(factorial(4));


// little bit different approach


function factorial(n) {
    let result = 1;
    if(n < 2) {
        return result;
    }
    
    for(let i = n; i >= 2; i-- ) {
        result = result * i;
    }
    return result
}

console.log(factorial(4));