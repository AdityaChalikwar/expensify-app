import React from 'react'
import ExpensesList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () => (
    <div>   
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpensesList />
    </div>
)

export default ExpenseDashboardPage