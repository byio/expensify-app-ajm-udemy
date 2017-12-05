import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { filters, altFilters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

// globals
let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setStartDate= jest.fn();
  setEndDate= jest.fn();
  setTextFilter= jest.fn();
  sortByDate= jest.fn();
  sortByAmount= jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
  />);
});

// test cases: general rendering
test('should render ExpenseListFilters correctly with default filters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

// test case: setTextFilter
test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// test case: sortByDate
test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

// test case: sortByAmount
test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

// test case: setStartDate & setEndDate
test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// test cases: onFocusChange (this.setState)
test('should handle date focus change to endDate', () => {
  const calFocused = 'endDate'; // can be null, 'startDate', or 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calFocused);
  expect(wrapper.state('calFocused')).toBe(calFocused);
});

test('should handle date focus change to startDate', () => {
  const calFocused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calFocused);
  expect(wrapper.state('calFocused')).toBe(calFocused);
});
