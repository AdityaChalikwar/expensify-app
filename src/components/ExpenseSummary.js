import React from 'react'
import expensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'

const ExpenseSummary = (props) => (
    <div>
        <h4>Total Expenses : {props.length}</h4>
        <h4>Total Amount : {
            props.total.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        })}</h4>
    </div>
)

const matchStateToProps = (state) => ({
    total: expensesTotal(state.expenses),
    length: state.expenses.length
})

export default connect(matchStateToProps)(ExpenseSummary)