import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import React from 'react'
import {shallow} from 'enzyme'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment'

const setStartDate = jest.fn()
const setEndDate = jest.fn()
const setTextFilter = jest.fn()
const sortBy = jest.fn()
const wrapper = shallow(
    <ExpenseListFilters 
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        sortBy={sortBy}
        setTextFilter={setTextFilter}
        filters={filters}
    />)

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('setTextFilter working correctly', () => {
    const value = 'bill'
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('sortBy working correctly', () => {
    const value = 'amount'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortBy).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const startDate = moment(0)
    const endDate = moment(0).add(4, 'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
})