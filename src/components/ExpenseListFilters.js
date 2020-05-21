import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component{
    state = {
        calenderFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onChange = (e) => {
        this.props.sortBy(e.target.value)
    }

    render(){
        return (
            <div>
                <input 
                    type='text'
                    placeholder='Text Filter' 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}/>
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                    displayFormat='DD/MM/YYYY'/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortBy: (filter) => filter === 'date' ? dispatch(sortByDate()) : dispatch(sortByAmount())
})

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)