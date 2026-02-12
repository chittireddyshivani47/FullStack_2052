function calculateIncome(arr) {
  return arr.reduce((sum, obj) => sum + obj.income, 0);
}

module.exports = calculateIncome;
