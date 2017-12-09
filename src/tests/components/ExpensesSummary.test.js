import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// test case: single expense
test('should render expenses summary correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary
    expensesCount={1}
    expensesTotal={197}
  />);
  expect(wrapper).toMatchSnapshot();
});

// test case: multiple expenses
test('should render expenses summary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expensesCount={23}
    expensesTotal={156795}
  />);
  expect(wrapper).toMatchSnapshot();
});

// test case: zero expenses
test('should render expenses summary corectly with zero expneses', () => {
  const wrapper = shallow(<ExpensesSummary
    expensesCount={0}
    expensesTotal={0}
  />);
  expect(wrapper).toMatchSnapshot();
});
