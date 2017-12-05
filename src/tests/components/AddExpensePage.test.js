import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

// globals
let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage
    addExpense={addExpense}
    history={history}
  />);
});

// test case: general rendered snapshot
test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test cases: handleExpenseForm
test('should fire handleExpenseForm', () => {
  wrapper.find('ExpenseForm').prop('handleExpenseForm')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
