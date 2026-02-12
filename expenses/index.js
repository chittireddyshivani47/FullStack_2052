function totalExpenses(arr) {
  return arr.reduce((sum, obj) => sum + obj.amount, 0);
}

module.exports = totalExpenses;
