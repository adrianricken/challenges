import { add, subtract, multiply, divide } from "./index";

test("adds input a (2) to input b (3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("adds input a (2) to input b (-7)", () => {
  const result = add(2, -7);
  expect(result).toBeLessThan(0);
});
test("adds input a (0.1) to input b (0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// ====================================================

test("subtracts input b (5) from input a (15)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("subtracts input b (25) from input a (15)", () => {
  const result = subtract(15, 25);
  expect(result).toBe(-10);
});

// ====================================================

test("multiplies input a (2) with input b (4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("multiplies input a (-2) with input b (4)", () => {
  const result = multiply(-2, 4);
  expect(result).toBe(-8);
});
test("multiplies input a (2) with input b (-4)", () => {
  const result = multiply(2, -4);
  expect(result).toBe(-8);
});
test("multiplies input a (-2) with input b (-4)", () => {
  const result = multiply(-2, -4);
  expect(result).toBe(8);
});

// ====================================================

test("divides input a (9) by input b (3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test('returns "You should not do this!" when input b = 0', () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
