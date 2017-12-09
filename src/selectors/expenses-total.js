import selectExpenses from './expenses';

export default (selectExpenses) => {
  return selectExpenses.map((expense) => expense.amount)
                       .reduce((a, b) => a + b, 0);
};
