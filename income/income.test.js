const calculateIncome = require("./index");

test("sums all incomes", () => {
  const list = [
    { income: 200 },
    { income: 300 },
    { income: 500 }
  ];
  expect(calculateIncome(list)).toBe(1000);
});
