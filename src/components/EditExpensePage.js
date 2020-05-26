import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startRemoveExpense, startEditExpense } from '../actions/expenses'
import Modal from 'react-modal'

export class EditExpensePage extends React.Component{
    state = {
        openModal: false,
        flag: false
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    remove = () => {
        this.setState(() => ({
            openModal: true
        }))
    }

    closeModal = () => {
        this.setState(() => ({ openModal: false}))
    }

    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }

    render(){
        return (
                <div>
                    <div className="page-header">
                        <div className="content-container">
                            <h1 className="page-header__title">Edit Expense</h1>
                        </div>
                    </div>
                    <div className="content-container">
                        <ExpenseForm 
                            expense={this.props.expense}
                            onSubmit={this.onSubmit}/>
                    </div>
                    <div className="content-container">
                        <button 
                        className="newButton"
                        onClick={this.remove}>Remove Expense</button>
                    </div>
                    <Modal 
                        className="modal"
                        isOpen={this.state.openModal}
                        contentLabel="Are you sure?"
                        closeTimeoutMS={200}
                        onRequestClose={this.closeModal}>
                        <h3 className="modal__title">Are you sure?</h3>
                        <p className="modal_body">The entry will be deleted permanently.</p>
                        <div className="button-container">
                            <button className="button" onClick={this.onRemove}>Yes</button>
                            <button className="newButton" onClick={this.closeModal}>No</button> 
                        </div>
                    </Modal>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

const matchStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(matchStateToProps, mapDispatchToProps)(EditExpensePage)