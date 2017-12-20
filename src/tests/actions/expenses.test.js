// import actions methods to test
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

// declaring a function that allows the test cases below to create the same mock store
const createMockStore = configureMockStore([thunk]);

// write data to firebase before each test(); the done method is used because setting data to firebase is async
beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  db.ref('expenses').set(expensesData).then(() => {
    done();
  });
});

// test case: removeExpense
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// test case: editExpense
test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'new note value'
    }
  });
});

// test cases: addExpense (only passes expense data into action object; no longer deals with default values)
test('should setup add expense action object with values provided', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

// test cases: startAddExpense (should add expense to database and store)
test('should add expense to database and store', (done) => { //done is passed in as an arg so jest knows this is async
  const store = createMockStore({}); // creating a mock store
  const expenseData = { // dummy expense data to be passed into startAddExpense
    description: 'mouse',
    amount: 3000,
    note: 'this one is better',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions(); // returns an array of dispatched actions
    // test that expense data is added to store
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    // test that expense data is added to database
    return db.ref(`expenses/${actions[0].expense.id}`).once('value'); // returns a promise to be used for promise chaining
  }).then((snapshot) => { // this is the success case for the returned promise above
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });

});

// test cases: startAddExpense (should add expense with defaults to database and store)
test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const defaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const expenseData = {};
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    // assert/test that default expense data is added to store (check the action object)
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaults
      }
    });
    // assert/test that default expense data is added to database (fetch the db)
    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaults);
    done();
  });
});

// test case: setExpenses
test('should setup set expenses action object with data (expenses)', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

// test case: startSetExpenses
test('should fetch expenses from firebase', (done) => {
  const store = createMockStore();
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
