import { sum, substract, multiply, division } from './math.js';

const OPERATIONS = {
    sum: "+",
    substract: "-",
    multiply: "*",
    division: "/",
};

const calculate = (a, b, operator) => {
    let result = null;

    switch(operator){
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
        case OPERATIONS.substract:
            result = substract(a, b);
            break;
        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;
        case OPERATIONS.division:
            result = division(a, b);
            break;

        default:
            break;
    }

    return result;
}

export default calculate;
