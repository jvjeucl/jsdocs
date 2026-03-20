/**
 *
 * @param a - First number
 * @param b - Second number
 * @returns {*} - The sum of a and b
 */
function add(a, b) {
    return a + b;
}
/**
 * Subtracts b from a.
 * @param {number} a - The number to subtract from
 * @param {number} b - The number to subtract
 * @returns {number} The difference
 */
function subtract(a, b) {
    return a - b;
}
/**
 * Multiplies two numbers.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
    return a * b;
}
/**
 * Divides a by b.
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The result of the division
 * @throws {Error} If b is zero
 */
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}
/**
 * Performs an operation on two values and optionally applies a discount.
 *
 * Discount rules:
 * - Result above 100: 10% discount
 * - Result 100 or below: 5% discount
 *
 * @param {number} value1 - The first value
 * @param {number} value2 - The second value
 * @param {"add"|"multiply"} operationType - Which operation to perform
 * @param {boolean} hasDiscount - Whether to apply a discount
 * @returns {number} The final result after optional discount
 * @throws {Error} If operationType is not recognized
 *
 * @example
 * // Multiply with discount
 * calculateWithDiscount(10, 20, "multiply", true); // 180
 *
 * @example
 * // Add without discount
 * calculateWithDiscount(30, 20, "add", false); // 50
 */
function calculateWithDiscount(value1, value2, operationType, hasDiscount) {
    let result;

    if (operationType === "add") {
        result = add(value1, value2);
    } else if (operationType === "multiply") {
        result = multiply(value1, value2);
    } else {
        throw new Error("Unknown operation type");
    }

    if (hasDiscount) {
        result = result > 100 ? result * 0.9 : result * 0.95;
    }

    return result;
}

module.exports = { add, subtract, multiply, divide, calculateWithDiscount };