import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// test case: should return 0 if no expenses
test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

// test case: should correctly add up single expense
test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(195);
});

// test case: should correctly add up multiple expenses
test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(114195);
});
