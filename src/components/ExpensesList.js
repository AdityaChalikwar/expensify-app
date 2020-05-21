import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpensesList = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'exepense' : 'expenses'
    return (
        <div>
        {
            props.expenses.length === 0 ? (
                <p>No Matches To Filters</p>
            ) : (
                <div>
                <p>Viewing {props.expenses.length} {expenseWord} totalling 
                {
                    props.total.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR'
                })}</p>
                {props.expenses.map((expense, index) => <ExpenseListItem key={index} {...expense}/>)}
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