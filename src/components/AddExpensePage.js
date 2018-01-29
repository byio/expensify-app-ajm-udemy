import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  handleExpenseForm = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render () {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add an Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            handleExpenseForm={this.handleExpenseForm}
          />
        </div>
      </div>
    );
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addExpense: (expense) => dispatch(addExpense(expense)) //the name of the returned method should ideally match the action generator
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
