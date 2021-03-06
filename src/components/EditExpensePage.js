import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  handleExpenseForm = (expense) => {
    // this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  handleRemoveClick = () => {
    // this.props.dispatch(removeExpense({ id: this.props.expense.id }));
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render () {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          {/* From Edit Expense Page. Editing expense with Id = {this.props.match.params.id}. */}
          {/* {console.log('this.props.match: ', this.props.match)} */}
          <ExpenseForm
            expense={this.props.expense}
            handleExpenseForm={this.handleExpenseForm}
          />
          <button
            className="button button--secondary"
            onClick={this.handleRemoveClick}
          >
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
