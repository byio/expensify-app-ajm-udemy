import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// only render the app if it hasn't been rendered
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// // tracking authentication status
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    console.log('Logged Out!');
  };
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
