import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  handleExpenseForm = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render () {
    return (
      <div>
        From Add Expense Page.
        <ExpenseForm
          handleExpenseForm={this.handleExpenseForm}
        />
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
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
