const totalExpenses = require("./index");

test("sums all expenses", () => {
  const items = [
    { amount: 100 },
    { amount: 50 },
    { amount: 150 }
  ];
  expect(totalExpenses(items)).toBe(300);
});
