import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE (done)
// REMOVE_EXPENSE (done)
// EDIT_EXPENSE (done)
// SET_TEXT_FILTER (done)
// SORT_BY_DATE (done)
// SORT_BY_AMOUNT (done)
// SET_START_DATE (done)
// SET_END_DATE (done)
// getVisibleExpenses

// action generators
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({
  id
} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date
});

const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
});

// default states
const expensesReducerDefaultState = [];
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// filters reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

// create store (using combineReducers)
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

// dispatch actions
    // add expenses
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}));
    // remove expense
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
    // edit expense
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
    // set text filter
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
    // sort by amount (toggle to sort by amount)
store.dispatch(sortByAmount());
    // sort by date (toggle to sort by date)
// store.dispatch(sortByDate());
    // set start date
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
    // set end date
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

// const demoState = {
//   expenses: [{
//     id: 'asfagshhwrtjshth',
//     description: 'rent',
//     note: 'This was the final payment for that address.',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // amount or date
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// const user = {
//   name: 'jen',
//   age: 24
// };
//
// console.log({
//   ...user,
//   age: 27,
//   location: 'philly'
// });
