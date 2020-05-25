import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpensesList = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses'
    return (
        <div className="content-container">
        {
            props.expenses.length === 0 ? (
                <p className="no-expense-message">No Matches To Filters</p>
            ) : (
                <div>
                    <p className="filter-message">Viewing <span>
                    {props.expenses.length}</span> {expenseWord} totalling <span>{
                        props.total.toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR'
                    })}</span></p>
                    <div className="list-body">
                        <div className="list-header">
                            <div className="show-for-mobile">Expenses</div>
                            <div className="show-for-desktop">Expense</div>
                            <div className="show-for-desktop">Amount</div>
                        </div>
                        {props.expenses.map((expense, index) => <ExpenseListItem key={index} {...expense}/>)}
                    </div>
                </div>
            )
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expenses,
        total: expensesTotal(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesList)