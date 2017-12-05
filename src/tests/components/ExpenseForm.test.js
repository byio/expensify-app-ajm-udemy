import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

// test cases: overall state of form
test('should render ExpenseForm correctly with default state', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data correctly', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});

// test cases: onExpenseSubmit
test('should render error for invalid (empty) form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // match default snapshot
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  // error property has a value with length > 0 after submit
  expect(wrapper.state('desError').length).toBeGreaterThan(0);
  expect(wrapper.state('amtError').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot(); // match error snapshot
});

test('should call onSubmit prop upon valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} handleExpenseForm={onSubmitSpy} />);
  // const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('desError')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  });
});

// test case: onDescriptionChange
test('should set description on input change', () => {
  const description = "test description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value: description }
  });
  expect(wrapper.state('description')).toBe(description);
});

// test case: onNoteChange
test('should set note on textarea change', () => {
  const value = "test note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

// test cases: onAmountChange
test('should set amount if valid input', () => {
  const value = "2.55";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
  const value = "10.555";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe("");
});

// test case: onDateChange
test('should set new date on date change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

// test case: onFocusChange
test('should set calFocused on focus change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = true;
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: focused });
  expect(wrapper.state('calFocused')).toEqual(focused);
});
