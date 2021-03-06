import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onNoteChanged = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if((!amount || amount.match(/^\d+(\.\d{0,2})?$/)) && amount !== 0)
            this.setState(() => ({amount}))
    }

    onDateChange = (createdAt) => {
        if(createdAt)
            this.setState(() => ({createdAt}))
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10),
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        })
    }

    render(){
        return (
           <form className="form" onSubmit={this.onSubmit}>
                <input
                    type='text' 
                    className="text-input"
                    placeholder='Description'
                    autoFocus 
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    required/>
                <input 
                    type='text'
                    className="text-input" 
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    required/>
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    displayFormat='DD/MM/YYYY'/>
                <textarea 
                    className="textarea" 
                    placeholder='Add Note (Optional)'
                    value={this.state.note}
                    onChange={this.onNoteChanged}/>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}