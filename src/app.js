import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});



// store.dispatch(addExpense({
//   description: 'Water Bill',
//   amount: 10000,
//   createdAt: 1000
// }));
// store.dispatch(addExpense({
//   description: 'Gas Bill',
//   amount: 5000,
//   createdAt: 2000
// }));
// store.dispatch(addExpense({
//   description: 'Rent',
//   amount: 109500,
//   createdAt: 500
// }));

// const state = store.getState();
// console.log(state);
// console.log(getVisibleExpenses(state.expenses, state.filters));
