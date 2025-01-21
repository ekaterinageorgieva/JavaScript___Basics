function performOperation(N1, N2, operator) {
    let result;
    let message;
    let type;

    switch (operator) {
        case '+':
            result = N1 + N2;
            type = (result % 2 === 0) ? 'even' : 'odd';
            message = `${N1} + ${N2} = ${result} - ${type}`;
            break;
        case '-':
            result = N1 - N2;
            type = (result % 2 === 0) ? 'even' : 'odd';
            message = `${N1} - ${N2} = ${result} - ${type}`;
            break;
        case '*':
            result = N1 * N2;
            type = (result % 2 === 0) ? 'even' : 'odd';
            message = `${N1} * ${N2} = ${result} - ${type}`;
            break;
        case '/':
            if (N2 === 0) {
                message = `Cannot divide ${N1} by zero`;
            } else {
                result = N1 / N2;
                message = `${N1} / ${N2} = ${result.toFixed(2)}`;
            }
            break;
        case '%':
            if (N2 === 0) {
                message = `Cannot divide ${N1} by zero`;
            } else {
                result = N1 % N2;
                message = `${N1} % ${N2} = ${result}`;
            }
            break;
        default:
            message = "Invalid operator";
            break;
    }

    console.log(message);
}


performOperation(10, 12, '+');
performOperation(10, 1, '-');
performOperation(7, 3, '*');
performOperation(123, 12, '/');
performOperation(112, 0, '/');
performOperation(10, 3, '%');
performOperation(10, 0, '%');
