import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// test case: default values
test('should set expenses default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

// test cases: remove expense
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should NOT remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// test case: add expense
test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'new expense',
    note: 'mock expense for add expense reducer test',
    amount: 999,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

// test cases: edit expense
test('should edit expense by id', () => {
  const updates = {
    amount: 250
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(updates.amount);
});

test('should not update expense if expense not found', () => {
  const updates = {
    amount: 250
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// test case: set expenses
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
