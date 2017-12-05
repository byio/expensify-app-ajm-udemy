import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

// test cases: setTextFilter
test('should setup set text filter action object with values provided', () => {
  const action = setTextFilter('filter text');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'filter text'
  });
});

test('should setup set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

// test case: sortByAmount
test('should setup sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

// test case: sortByDate
test('should setup sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

// test cases: setStartDate
test('should setup set start date action object with values provided', () => {
  const action = setStartDate(moment(1491955200));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(1491955200)
  });
});

test('should setup set start date action object with default values', () => {
  const action = setStartDate();
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: undefined
  });
});

// test cases: setEndDate
test('should setup set end date action object with values provided', () => {
  const action = setEndDate(moment(1491955200));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(1491955200)
  });
});

test('should setup set end date action object with default values', () => {
  const action = setEndDate();
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: undefined
  });
});
