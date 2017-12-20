import uuid from 'uuid';
import db from '../firebase/firebase';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    // return the promise chain below so that we can do promise chaining in the test suite for this method
    return db.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    })
  };
};

export const removeExpense = ({
  id
} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES (set the array value that we get back from firebase)
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// START_SET_EXPENSES (async method that calls setExpenses defined above)
export const startSetExpenses = () => {
  return (dispatch) => {
    return db.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
