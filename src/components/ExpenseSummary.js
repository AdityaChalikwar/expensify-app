import React from 'react'
import expensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ExpenseSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <div className="page-header__content">
                <h4 className="page-header__title">Total Expenses : <span>{props.length}</span></h4>
                <h4 className="page-header__title">Total Amount : <span>{
                    props.total.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR'
                })}</span></h4>
            </div>
            <div className="page-header__actions">
                <Link className="button" to='/create'>Add Expense</Link>
            </div>
        </div>
    </div>
)

const matchStateToProps = (state) => ({
    total: expensesTotal(state.expenses),
    length: state.expenses.length
})

export default connect(matchStateToProps)(ExpenseSummary)