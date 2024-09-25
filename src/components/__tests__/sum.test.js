const { sum } = require("../sum");

test("sum function for numbers", () => {
  const result = sum(4, 3);

  //Assertion
  expect(result).toBe(7);
});
