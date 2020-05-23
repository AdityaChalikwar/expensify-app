import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

const startEditExpense = jest.fn()
const startRemoveExpense = jest.fn()
const history = {push: jest.fn()}
const wrapper = shallow(
    <EditExpensePage 
        expense={expenses[1]} 
        startEditExpense={startEditExpense} 
        history={history}
        startRemoveExpense={startRemoveExpense}
    />)

test('should render editExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should edit data correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should remove data correctly', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    })
})