import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component {
    constructor(props){
        super(props)
    }

    onSubmit = (expense) => {
        this.props.addExpenseFunction(expense)
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <h3>Add Expense</h3>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpenseFunction: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)