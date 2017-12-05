import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  handleExpenseForm = (expense) => {
    // this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  handleRemoveClick = () => {
    // this.props.dispatch(removeExpense({ id: this.props.expense.id }));
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render () {
    return (
      <div>
        {/* From Edit Expense Page. Editing expense with Id = {this.props.match.params.id}. */}
        {console.log('this.props.match: ', this.props.match)}
        <ExpenseForm
          expense={this.props.expense}
          handleExpenseForm={this.handleExpenseForm}
        />
        <button onClick={this.handleRemoveClick}>
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
