import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

// globals
let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    editExpense={editExpense}
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[2]}
  />);
});

// test case: general rendered snapshot
test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test case: editExpense
test('should fire handleExpenseForm, triggering editExpense', () => {
  wrapper.find('ExpenseForm').prop('handleExpenseForm')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

// test case: removeExpense
test('should fire handleRemoveClick, triggering startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
